'use client';

import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import MiddleNavMenu from './components/DesktopMainMenu';
import logoWhiteSrc from 'public/images/base/Logo-white.svg';
import logoBlackSrc from 'public/images/base/Logo-black.svg';
import { PagePathnamesEnum } from 'shared/constants/navigation';
import { useAtomValue } from 'jotai';
import { isOpenSubMenuAtom } from 'shared/store/atoms';
import useGsapContext from 'shared/lib/hooks/useGsapContext';
import { twJoin } from 'tailwind-merge';
import { fonts } from 'components/fonts';
import AccountIcon from 'elements/icons/AccountIcon';

export default function Header() {
  const isOpenSubMenu = useAtomValue(isOpenSubMenuAtom);
  const gsapCtx = useGsapContext();

  function handleCloseMobileMenu() {
    gsapCtx.add(() => {
      gsap.to('.mobile-nav', {
        autoAlpha: 0,
      });
      gsap.set('body', { overflow: 'auto' });
    });
  }

  return (
    <div
      className={twJoin(
        'header sticky top-0! z-1000 border-b border-solid font-america dark:border-secondary-divider dark:backdrop-blur-[5px] max-xl:py-1',
        fonts.variable,
        isOpenSubMenu ? 'border-purple bg-purple' : 'border-primary-divider bg-white'
      )}
    >
      <div className="custom-container flex items-center justify-between max-xl:h-12">
        <Link
          href={PagePathnamesEnum.Home}
          onClick={handleCloseMobileMenu}
          className="relative h-6 w-33.5 text-left xl:h-8 xl:w-44.75"
        >
          {isOpenSubMenu ? (
            <Image fill alt="Screenberry logo" src={logoWhiteSrc} className="block w-full" priority />
          ) : (
            <Image fill className="block w-full" alt="Screenberry logo" src={logoBlackSrc} priority />
          )}
        </Link>
        <MiddleNavMenu />
        <div className="flex justify-between items-center gap-3">
          <Link href={PagePathnamesEnum.AccountLicenses}>
            <AccountIcon colorIconClass={isOpenSubMenu ? 'stroke-white' : 'stroke-title-black'} />
          </Link>
          <Link
            href={PagePathnamesEnum.Licensing}
            onClick={handleCloseMobileMenu}
            className={`text-5 block whitespace-nowrap rounded border border-solid px-3.75 py-2.25 transition ${
              isOpenSubMenu
                ? 'border-white bg-white text-title-black hover:border-black hover:bg-black hover:text-white'
                : 'border-black bg-transparent text-title-black hover:bg-black hover:text-white'
            }`}
          >
            Get Screenberry
          </Link>
        </div>
      </div>
    </div>
  );
}
