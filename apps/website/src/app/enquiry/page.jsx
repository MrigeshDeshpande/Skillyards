"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function EnquiryPage() {
    const [step, setStep] = useState(1);

    const [counsellors, setCounsellors] = useState([]);
    const [selectedCounsellor, setSelectedCounsellor] = useState(null);
    const [programmes, setProgrammes] = useState([]);
    const [selectedProgramme, setSelectedProgramme] = useState(null);

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // TODO: Re-enable when API is ready
    // useEffect(() => {
    //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/counsellors`)
    //         .then(res => res.json())
    //         .then(setCounsellors)
    //         .catch(console.error);
    // }, []);

    // useEffect(() => {
    //     fetch(`${process.env.NEXT_PUBLIC_API_URL}/programmes`)
    //         .then(res => res.json())
    //         .then(setProgrammes)
    //         .catch(console.error);
    // }, []);

    const avatarUrl = (avatar) => {
        if (!avatar) return "/avatar-placeholder.png";

        const cleanPath = avatar.startsWith("/")
            ? avatar.slice(1)
            : avatar;

        return `https://admin.skillyards.in/${cleanPath}`;
    };

    const submit = async () => {
        setLoading(true);

        // TODO: Re-enable when API is ready
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiries`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //         Accept: "application/json",
        //     },
        //     body: JSON.stringify({
        //         ...form,
        //         counselled_by: selectedCounsellor,
        //         programme_id: selectedProgramme,
        //     }),
        // });
        // setLoading(false);
        // if (res.ok) {
        //     setSuccess(true);
        // } else {
        //     const error = await res.json();
        //     alert(error.message || "Something went wrong");
        // }

        // Demo mode
        setLoading(false);
        setSuccess(true);
    };

    if (success) {
        return (
            <div className="max-w-xl mx-auto p-8 text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-2">
                    Enquiry Submitted!
                </h2>
                <p className="text-gray-600">
                    Thank you for registering. Our counsellor will contact you soon.
                </p>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Register Your Enquiry</h1>

            {/* STEP INDICATOR */}
            <div className="flex items-center gap-2 mb-8 text-sm font-medium">
        <span className={step === 1 ? "text-indigo-600" : "text-gray-400"}>
          1. Counsellor
        </span>
                <span>→</span>
                <span className={step === 2 ? "text-indigo-600" : "text-gray-400"}>
          2. Details
        </span>
            </div>

            {/* STEP 1: Counsellor Selection */}
            {step === 1 && (
                <div>
                    <h2 className="font-semibold mb-3">Choose Your Counsellor</h2>

                    <div className="flex flex-wrap gap-4 mb-6">
                        {counsellors.map(c => (
                            <button
                                key={c.id}
                                type="button"
                                onClick={() => setSelectedCounsellor(c.id)}
                                className={`w-32 rounded-xl border p-3 text-center transition
                  ${
                                    selectedCounsellor === c.id
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-gray-300 hover:border-gray-400"
                                }`}
                            >
                                <Image
                                    src={avatarUrl(c.avatar)}
                                    alt={`${c.first_name} ${c.last_name}`}
                                    width={500}
                                    height={500}
                                    className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                                />
                                <div className="text-sm font-medium">
                                    {c.first_name} {c.last_name}
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        disabled={!selectedCounsellor}
                        onClick={() => setStep(2)}
                        className="bg-indigo-600 text-white rounded-lg px-6 py-2 font-medium disabled:opacity-50"
                    >
                        Continue
                    </button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <button
                        onClick={() => setStep(1)}
                        className="text-sm text-gray-500 mb-4 hover:underline"
                    >
                        ← Change counsellor
                    </button>

                    <h2 className="font-semibold mb-3">Choose a Programme</h2>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        {programmes.map(p => (
                            <button
                                key={p.id}
                                type="button"
                                onClick={() => setSelectedProgramme(p.id)}
                                className={`rounded-xl border p-4 text-left transition
            ${
                                    selectedProgramme === p.id
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-gray-300 hover:border-gray-400"
                                }`}
                            >
                                <h3 className="font-medium">{p.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    {p.short_description}
                                </p>

                                <div className="text-xs text-gray-500 mt-2 flex gap-3">
                                    <span>⏱ {p.duration}</span>
                                    <span>🎓 {p.mode}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <button
                        disabled={!selectedProgramme}
                        onClick={() => setStep(3)}
                        className="bg-indigo-600 text-white rounded-lg px-6 py-2 font-medium disabled:opacity-50"
                    >
                        Continue
                    </button>
                </div>
            )}

            {step === 3 && (
                <div className="max-w-xl">
                    <button
                        onClick={() => setStep(2)}
                        className="text-sm text-gray-500 mb-4 hover:underline"
                    >
                        ← Change programme
                    </button>

                    <h2 className="text-lg font-semibold mb-4">
                        Enter Your Details
                    </h2>

                    <div className="grid gap-4">
                        {/* First Name */}
                        <input
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="First Name *"
                            required
                            value={form.first_name}
                            onChange={e =>
                                setForm({ ...form, first_name: e.target.value })
                            }
                        />

                        {/* Last Name */}
                        <input
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Last Name"
                            value={form.last_name}
                            onChange={e =>
                                setForm({ ...form, last_name: e.target.value })
                            }
                        />

                        {/* Email */}
                        <input
                            type="email"
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Email Address *"
                            required
                            value={form.email}
                            onChange={e =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        {/* Mobile */}
                        <input
                            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Mobile Number"
                            value={form.mobile}
                            onChange={e =>
                                setForm({ ...form, mobile: e.target.value })
                            }
                        />

                        {/* Submit */}
                        <button
                            onClick={submit}
                            disabled={loading}
                            className="mt-4 bg-indigo-600 text-white rounded-lg py-2 font-medium
                   hover:bg-indigo-700 transition disabled:opacity-50"
                        >
                            {loading ? "Submitting..." : "Submit Enquiry"}
                        </button>

                        {/* Trust note */}
                        <p className="text-xs text-gray-500 text-center mt-2">
                            Your information is safe with us. No spam. Ever.
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
}
