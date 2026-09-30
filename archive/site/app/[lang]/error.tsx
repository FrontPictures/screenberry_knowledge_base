'use client';

export default function ServerErrorPage() {
  return (
    <div className="fullscreen-height-without-header relative">
      <div className="absolute left-1/2 top-[45%] flex -translate-x-1/2 translate-y-[-55%] items-center gap-4 font-light sm:gap-6">
        <span className="title-r-3 text-title-black sm:title-r-1">500</span>
        <div className="h-16 w-px bg-[#7a7a7a]" />
        <span className="title-r-6 whitespace-nowrap tracking-[0.01em] text-title-black sm:title-r-4">
          Internal Server Error
        </span>
      </div>
    </div>
  );
}
