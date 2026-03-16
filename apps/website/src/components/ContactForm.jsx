"use client";

import { useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const { executeRecaptcha } = useGoogleReCaptcha();

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get("first_name");
        const lastName = formData.get("last_name");
        const email = formData.get("email");
        const phone = formData.get("mobile");
        const message = formData.get("message");

        if (!executeRecaptcha) {
            setError("Captcha not ready. Please try again.");
            setLoading(false);
            return;
        }

        const token = await executeRecaptcha("contact_form");

        const payload = {
            firstName,
            lastName,
            email,
            phone,
            message,
            captchaToken: token
        };

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            setSuccess(data.message);
            form.reset();

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                    <Label htmlFor="first_name">First name</Label>
                    <Input
                        id="first_name"
                        name="first_name"
                        placeholder="First name"
                        required
                    />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="last_name">Last name</Label>
                    <Input
                        id="last_name"
                        name="last_name"
                        placeholder="Last name"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
                <Label htmlFor="email">Email address</Label>
                <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                />
            </div>

            {/* Mobile */}
            <div className="space-y-1">
                <Label htmlFor="mobile">Mobile number</Label>
                <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                />
            </div>



            {/* Message */}
            <div className="space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                />
            </div>

            {/* Submit */}
            <Button
                type="submit"
                className="w-full"
                disabled={loading}
            >
                {loading ? "Sending..." : "Send Message"}
            </Button>

            {/* Messages */}
            {success && (
                <p className="text-sm text-green-600">{success}</p>
            )}

            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}
        </form>
    );
}

export default ContactForm;
