import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-white pb-12 pt-10 md:pt-12">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="border-t border-[#0f172a]/10 pt-10 md:pt-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Logo />

            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="https://www.linkedin.com/in/hanna-barr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f172a] opacity-60 transition-opacity hover:opacity-100"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <div className="flex items-center gap-6 font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-60">
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
            <p className="font-['Noto_Sans',sans-serif] text-sm text-[#0f172a] opacity-40">
              © 2026 Buffx. All rights reserved. | Transforming Legal Rulings into Executable Financial Workflows
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
