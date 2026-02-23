import Image from "next/image";

export function Logo() {
  return (
    <a href="https://buffx.ai" className="flex items-center" aria-label="Buffx" target="_blank" rel="noopener noreferrer">
      <p
        className="font-['Viga',sans-serif] text-3xl leading-none text-white font-bold md:text-4xl"
        style={{ WebkitTextStroke: "1px #0f172a" }}
      >
        BUFF
      </p>
      <div className="relative ml-0.5 h-9 w-9 md:h-12 md:w-12">
        <Image src="/assets/buffx-logo-mark.png" alt="Buffx logo" fill sizes="48px" className="object-contain" priority />
      </div>
    </a>
  );
}
