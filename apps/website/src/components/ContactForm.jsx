"use client";

import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const recaptchaRef = useRef(null);

    async function handleSubmit(e) {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        const token = recaptchaRef.current?.getValue();

        if (!token) {
            setError("Please verify that you are not a robot.");
            setLoading(false);
            return;
        }

        const form = e.currentTarget;

        const payload = {
            first_name: form.first_name.value,
            last_name: form.last_name.value,
            email: form.email.value,
            mobile: form.mobile.value,
            message: form.message.value,
            "g-recaptcha-response": token,
        };

        try {
            // TODO: Re-enable when API is ready
            // const res = await fetch(
            //     `${process.env.NEXT_PUBLIC_API_URL}/contact`,
            //     {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //             Accept: "application/json",
            //         },
            //         body: JSON.stringify(payload),
            //     }
            // );
            // const data = await res.json();
            // if (!res.ok) {
            //     throw new Error(data.message || "Something went wrong");
            // }
            // setSuccess(data.message);

            setSuccess("Thank you! Your message has been received. (Demo mode)");
            form.reset();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
            recaptchaRef.current?.reset();
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

            {/* reCAPTCHA */}
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onExpired={() =>
                    setError("reCAPTCHA expired. Please verify again.")
                }
            />

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
