"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    hasDivorceDoc: false,
    companyWebsite: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const response = await fetch("/api/waitlist/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        hasDivorceDoc: formData.hasDivorceDoc,
        companyWebsite: formData.companyWebsite,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Waitlist submission error:", errorText);
      alert("Something went wrong while submitting. Please try again in a moment.");
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setIsSubmitting(false);
      setFormData({ fullName: "", phone: "", email: "", hasDivorceDoc: false, companyWebsite: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="mb-5 font-['Viga',sans-serif] text-4xl text-[#0f172a] md:text-6xl">Let's Connect</h2>
          <p className="mx-auto max-w-2xl font-['Noto_Sans',sans-serif] text-lg text-[#0f172a] opacity-60 md:text-xl">
            Join us in transforming the LegalTech and FinTech landscape
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-3xl border border-[#05fb90]/30 bg-[#f7fff9] p-8 text-center shadow-[0px_20px_60px_0px_rgba(5,251,144,0.15)] md:p-10">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#05fb90] to-[#b9fee0]">
                <CheckCircle2 className="h-9 w-9 text-[#0f172a]" />
              </div>
              <h3 className="mb-3 font-['Noto_Sans',sans-serif] text-2xl font-bold text-[#0f172a]">You're on the list</h3>
              <p className="font-['Noto_Sans',sans-serif] text-base text-[#0f172a] opacity-70">
                Thanks for signing up. We'll update you as soon as access opens.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" id="waitlist-form">
              <div>
                <label htmlFor="fullName" className="mb-2 block font-['Noto_Sans',sans-serif] text-base font-medium text-[#0f172a]">
                  Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full rounded-2xl border-2 border-transparent bg-[#f0f0fa] px-6 py-4 font-['Noto_Sans',sans-serif] text-[#0f172a] outline-none transition-colors focus:border-[#05fb90]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block font-['Noto_Sans',sans-serif] text-base font-medium text-[#0f172a]">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-2xl border-2 border-transparent bg-[#f0f0fa] px-6 py-4 font-['Noto_Sans',sans-serif] text-[#0f172a] outline-none transition-colors focus:border-[#05fb90]"
                  placeholder="Your mobile phone"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-['Noto_Sans',sans-serif] text-base font-medium text-[#0f172a]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl border-2 border-transparent bg-[#f0f0fa] px-6 py-4 font-['Noto_Sans',sans-serif] text-[#0f172a] outline-none transition-colors focus:border-[#05fb90]"
                  placeholder="your.email@company.com"
                />
              </div>

              <label className="flex items-start gap-3 rounded-2xl bg-[#f0f0fa] px-4 py-4 font-['Noto_Sans',sans-serif] text-sm text-[#0f172a]">
                <input
                  type="checkbox"
                  checked={formData.hasDivorceDoc}
                  onChange={(e) => setFormData({ ...formData, hasDivorceDoc: e.target.checked })}
                  className="mt-0.5 h-5 w-5 cursor-pointer rounded accent-[#05fb90]"
                />
                I already have a divorce ruling/agreement (optional)
              </label>

              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={formData.companyWebsite}
                onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                className="hidden"
              />

              <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-full px-10 py-5 font-['Noto_Sans',sans-serif] text-lg font-bold text-[#0f172a] shadow-[0px_23.16px_49.1px_0px_rgba(5,251,144,0.3)] transition-all hover:scale-[1.01] hover:shadow-[0px_28px_60px_0px_rgba(5,251,144,0.4)] disabled:cursor-not-allowed disabled:opacity-70"
                  style={{
                    backgroundImage:
                      "linear-gradient(120.485deg, rgb(5, 251, 144) 41.43%, rgb(185, 254, 224) 94.857%)",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Join Waitlist"}
                </button>
                <a
                  href="#"
                  className="flex-1 rounded-full border-2 border-[#00FF9D] bg-white px-10 py-5 text-center font-['Noto_Sans',sans-serif] text-lg font-bold text-[#0f172a] transition-colors hover:bg-[#e5fff4]"
                >
                  Request Pitch Deck
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
