"use client";

import { useState } from "react";
import { Logo } from "./Logo";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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
        fullName: formData.name,
        email: formData.email,
        phone: "",
        hasDivorceDoc: false,
        companyName: formData.company,
        companyWebsite: formData.companyWebsite,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Footer waitlist submission error:", errorText);
      alert("Something went wrong while submitting. Please try again in a moment.");
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", companyWebsite: "" });

    setIsSubmitting(false);
  };

  return (
    <>
      <section id="contact" className="relative bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="mb-6 font-['Viga',sans-serif] text-4xl text-[#0f172a] md:text-6xl">Let's Connect</h2>
            <p className="mx-auto max-w-2xl font-['Noto_Sans',sans-serif] text-lg text-[#0f172a] opacity-60 md:text-xl">
              Join us in transforming the LegalTech and FinTech landscape
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <div className="rounded-3xl border border-[#05fb90]/30 bg-[#f7fff9] p-8 text-center shadow-[0px_20px_60px_0px_rgba(5,251,144,0.15)] md:p-10">
                <h3 className="mb-3 font-['Noto_Sans',sans-serif] text-2xl font-bold text-[#0f172a]">Thanks, we got your details</h3>
                <p className="font-['Noto_Sans',sans-serif] text-base text-[#0f172a] opacity-70">
                  We will be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-['Noto_Sans',sans-serif] font-medium text-[#0f172a]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border-2 border-transparent bg-[#f0f0fa] px-6 py-4 font-['Noto_Sans',sans-serif] text-[#0f172a] transition-colors focus:border-[#05fb90] focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-['Noto_Sans',sans-serif] font-medium text-[#0f172a]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl border-2 border-transparent bg-[#f0f0fa] px-6 py-4 font-['Noto_Sans',sans-serif] text-[#0f172a] transition-colors focus:border-[#05fb90] focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 block font-['Noto_Sans',sans-serif] font-medium text-[#0f172a]">
                    Fund / Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-2xl border-2 border-transparent bg-[#f0f0fa] px-6 py-4 font-['Noto_Sans',sans-serif] text-[#0f172a] transition-colors focus:border-[#05fb90] focus:outline-none"
                    placeholder="Your fund or company name"
                  />
                </div>

                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={formData.companyWebsite}
                  onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                  className="hidden"
                />

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 rounded-full px-10 py-5 font-['Noto_Sans',sans-serif] text-lg font-bold text-[#0f172a] shadow-[0px_23.16px_49.1px_0px_rgba(5,251,144,0.3)] transition-all hover:scale-105 hover:shadow-[0px_28px_60px_0px_rgba(5,251,144,0.4)]"
                    style={{
                      backgroundImage:
                        "linear-gradient(120.485deg, rgb(5, 251, 144) 41.43%, rgb(185, 254, 224) 94.857%)",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Schedule Pitch Deck"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="relative bg-[#0f172a] py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Logo />

            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/hanna-barr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white opacity-60 transition-opacity hover:opacity-100"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <div className="flex items-center gap-6 font-['Noto_Sans',sans-serif] text-sm text-white opacity-60">
                <a href="#" className="transition-opacity hover:opacity-100">
                  Privacy Policy
                </a>
                <a href="#" className="transition-opacity hover:opacity-100">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="font-['Noto_Sans',sans-serif] text-sm text-white opacity-40">
              © 2026 Buffx. All rights reserved. | A fintech platform for automated collection of child support and
              shared expenses
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
