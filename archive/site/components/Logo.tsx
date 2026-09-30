'use client';
import { useTheme } from 'next-themes';
import LogoBlack from 'public/images/base/Logo-black.svg';
import LogoWhite from 'public/images/base/Logo-white.svg';
import Image from 'next/image';

export default function Logo() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex items-center">
      {resolvedTheme === 'light' ? (
        <Image
          width={179}
          height={32}
          unoptimized
          className="mr-1 max-xl:h-6 max-xl:w-33.5"
          alt="Screenberry logo"
          src={LogoBlack}
        />
      ) : (
        <Image
          width={179}
          height={32}
          unoptimized
          className="mr-1 max-xl:h-6 max-xl:w-33.5"
          alt="Screenberry logo"
          src={LogoWhite}
        />
      )}
      <span className="mb-0.75 text-lg leading-6 font-bold text-[rgb(0,107,230)] dark:text-[rgb(0,138,230)] xl:text-2xl">
        Docs
      </span>
    </div>
  );
}
