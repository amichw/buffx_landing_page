"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { href: "#market", label: "Market Opportunity" },
  { href: "#problem", label: "The Problem" },
  { href: "#solution", label: "The Solution" },
  { href: "#revenue", label: "Revenue Model" },
  { href: "#why-now", label: "Why Now" },
  { href: "#why-us", label: "Why Us?" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0f172a]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-['Noto_Sans',sans-serif] text-sm font-medium text-white opacity-70 transition-opacity hover:opacity-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full px-8 py-3 font-['Noto_Sans',sans-serif] text-sm font-bold text-[#0f172a] shadow-[0px_12px_24px_0px_rgba(5,251,144,0.3)] transition-all hover:shadow-[0px_16px_32px_0px_rgba(5,251,144,0.4)]"
            style={{
              backgroundImage:
                "linear-gradient(120.485deg, rgb(5, 251, 144) 41.43%, rgb(185, 254, 224) 94.857%)",
            }}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0f172a] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-['Noto_Sans',sans-serif] text-sm font-medium text-white opacity-80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex w-fit rounded-full px-5 py-2.5 font-['Noto_Sans',sans-serif] text-sm font-bold text-[#0f172a]"
              style={{
                backgroundImage:
                  "linear-gradient(120.485deg, rgb(5, 251, 144) 41.43%, rgb(185, 254, 224) 94.857%)",
              }}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
