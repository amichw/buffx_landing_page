import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <span
        className="font-['Viga',sans-serif] text-3xl leading-none text-[#0f172a] md:text-4xl"
        style={{ WebkitTextStroke: "1px #0f172a" }}
      >
        BUFF
      </span>
      <div className="relative ml-0.5 h-9 w-9 md:h-12 md:w-12">
        <Image
          src="/assets/buffx-logo-mark.png"
          alt="Buffx logo"
          fill
          sizes="48px"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
