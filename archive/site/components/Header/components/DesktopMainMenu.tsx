'use client';
import { useGSAP } from '@gsap/react';
import DropDownArrow from 'elements/DropDownArrow';
import SocialMediaLinks from 'elements/SocialMediaLinks';
import gsap from 'gsap';
import { useAtom, useSetAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import bgSubmenuSrc from 'public/images/base/menu/bg-submenu-desktop.png';
import caseForSolutionMenuSrc from 'public/images/base/menu/case-for-solution-menu.webp';
import demoTutorialSrc from 'public/images/base/menu/demo-tutorial.png';
import { useEffect, useRef, useState } from 'react';
import { middleNavMenu, PagePathnamesEnum, SoftwareRightBlock } from 'shared/constants/navigation';
import { getLocalizedHref } from 'shared/lib/getLocalizedHref';
import useDevice from 'shared/lib/hooks/useDevice';
import { changePositionUnderline } from 'shared/lib/utils';
import { isOpenSubMenuAtom, selectedCaseCategoryAtom } from 'shared/store/atoms';
import { twJoin, twMerge } from 'tailwind-merge';

interface InnerListItem {
  href: string;
  className?: string;
  isOpenSubMenu: boolean;
  pathname: string | null;
  currentMouseEnterHref: string | null;
}

const getInnerListItemClassName = ({
  href,
  className,
  isOpenSubMenu,
  currentMouseEnterHref,
  pathname,
}: InnerListItem) => {
  const isActive = currentMouseEnterHref ? currentMouseEnterHref === href : pathname?.includes(href);

  return twMerge(
    'relative flex cursor-pointer middle-nav-item justify-between justify-center items-center gap-2 py-[20.5px]',
    'after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:transition-transform after:duration-300 after:ease-out',
    isOpenSubMenu ? 'text-white/70 hover:text-white' : 'text-primary-text hover:text-title-black',
    isActive
      ? isOpenSubMenu
        ? 'text-white after:scale-x-100 after:bg-white'
        : 'text-title-black after:scale-x-100 after:bg-purple'
      : isOpenSubMenu
        ? 'after:bg-secondary-divider hover:after:scale-x-100'
        : 'after:bg-primary-border hover:after:scale-x-100',
    className
  );
};

const navListItem = 'overflow-hidden text-[14px] select-none px-[10px]';

export default function MiddleNavMenu() {
  const [isOpenSubMenu, setIsOpenSubMenu] = useAtom(isOpenSubMenuAtom);
  const timerLeave = useRef<ReturnType<typeof setTimeout> | null>(null);
  const timerEnter = useRef<ReturnType<typeof setTimeout> | null>(null);
  const setSelectedCaseCategory = useSetAtom(selectedCaseCategoryAtom);
  const pathname = usePathname();
  const [currentMouseEnterHref, setCurrentMouseEnterHref] = useState<null | string>(null);
  const { isDesktop } = useDevice();
  const { contextSafe } = useGSAP();

  const openSubMenu = contextSafe((href: string, title: string) => {
    const panel = `.sub-menu-${title}`;

    gsap.killTweensOf('.sub-menu, .sub-menu *');
    gsap.set('.sub-menu', { autoAlpha: 0 });
    gsap.set(panel, { autoAlpha: 1, height: 'auto' });

    if (!isOpenSubMenu) gsap.fromTo(panel, { opacity: 0 }, { opacity: 1, duration: 0.28, ease: 'power2.out' });

    const startAt = isOpenSubMenu ? 0 : 0.06;
    gsap
      .timeline({ defaults: { ease: 'power2.out' } })
      .fromTo(`${panel} .sub-menu-title`, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.24 }, startAt)
      .fromTo(
        `${panel} .sub-menu-links li`,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.28, stagger: 0.03 },
        startAt + 0.04
      )
      .fromTo(
        `${panel} .sub-menu-side-block`,
        { autoAlpha: 0, x: 12 },
        { autoAlpha: 1, x: 0, duration: 0.3 },
        startAt + 0.08
      );

    setIsOpenSubMenu(true);
    setCurrentMouseEnterHref(href);
  });

  const closeSubMenu = contextSafe(() => {
    gsap.killTweensOf('.sub-menu, .sub-menu *');
    gsap.to('.sub-menu', { autoAlpha: 0, duration: 0.2, ease: 'power2.inOut' });
    setIsOpenSubMenu(false);
    setCurrentMouseEnterHref(null);
  });

  const handleMouseLeaveMenuItem = (title?: string) => () => {
    if (timerEnter.current) clearTimeout(timerEnter.current);
    if (timerLeave.current) clearTimeout(timerLeave.current);
    timerLeave.current = setTimeout(() => {
      if (title) closeSubMenu();
      else setCurrentMouseEnterHref(null);
    }, 180);
  };

  const handleMouseEnterMenuItem = (href: string, title?: string) => () => {
    if (timerEnter.current) clearTimeout(timerEnter.current);
    if (href === currentMouseEnterHref && timerLeave.current) {
      clearTimeout(timerLeave.current);
      return;
    }
    if (timerLeave.current) clearTimeout(timerLeave.current);
    timerEnter.current = setTimeout(() => {
      if (title) openSubMenu(href, title);
      else {
        closeSubMenu();
        setCurrentMouseEnterHref(href);
      }
    }, 180);
  };

  const handleClickCaseStudiesLink = contextSafe(() => {
    changePositionUnderline('all', 'case-type-filter');
    setSelectedCaseCategory({ category: 'All', anchor: 'all' });
  });

  useGSAP(() => {
    gsap.config({ nullTargetWarn: false });
    gsap.set('.sub-menu', { autoAlpha: 0 });
    setIsOpenSubMenu(false);
    setCurrentMouseEnterHref(null);

    return () => {
      if (timerEnter.current) clearTimeout(timerEnter.current);
      if (timerLeave.current) clearTimeout(timerLeave.current);
      gsap.killTweensOf('.sub-menu, .sub-menu *');
      gsap.set('.sub-menu', { autoAlpha: 0 });
      setIsOpenSubMenu(false);
      setCurrentMouseEnterHref(null);
    };
  });

  useEffect(() => {
    if (!isDesktop) closeSubMenu();
  }, [isDesktop]);

  return (
    <ul
      className={twJoin(
        'flex items-center justify-center whitespace-nowrap max-xl:hidden',
        isOpenSubMenu ? 'text-white' : 'text-primary-text'
      )}
    >
      {middleNavMenu.map(({ subMenu = null, href, title }) =>
        subMenu ? (
          <li
            key={href}
            onMouseEnter={handleMouseEnterMenuItem(href, title)}
            onMouseLeave={handleMouseLeaveMenuItem(title)}
            className={navListItem}
          >
            <div
              className={getInnerListItemClassName({
                href,
                pathname,
                isOpenSubMenu,
                currentMouseEnterHref,
              })}
            >
              <p>{title}</p>
              <DropDownArrow
                className={twJoin(
                  'origin-center transition-[rotate,opacity] duration-300 opacity-70',
                  href === currentMouseEnterHref ? '-rotate-180' : 'rotate-0',
                  href === currentMouseEnterHref ? 'opacity-100' : 'opacity-70',
                  isOpenSubMenu ? 'stroke-white' : 'stroke-primary-text'
                )}
              />
            </div>
            <div
              className={twJoin(
                'sub-menu no-scrollbar invisible absolute left-0 w-full overflow-x-hidden whitespace-normal text-primary-text',
                `sub-menu-${title}`
              )}
            >
              <div className="absolute min-h-115.5 w-full bg-white">
                <Image fill placeholder="blur" alt="background submenu" src={bgSubmenuSrc} />
              </div>
              <div
                className={`relative mx-auto grid min-h-115.5 max-w-360 grid-cols-[1.1fr_1.2fr_365px] justify-between gap-8 pl-16`}
              >
                <div className="sub-menu-title pt-6 text-purple">
                  <p className="mb-2 text-[32px] tracking-[.01em]">{subMenu.title}</p>
                  {subMenu?.descripton && <p className="text-sm">{subMenu.descripton}</p>}
                </div>
                <ul className="sub-menu-links bg-transparent py-8">
                  {subMenu.childLinks?.map(({ title, description, href, ...restProps }) => (
                    <li onClick={closeSubMenu} key={title} className="group mb-3 w-fit last:mb-0">
                      <Link href={getLocalizedHref(href, pathname)} {...restProps} className="group block w-fit">
                        <p
                          className={twJoin(
                            'title-r-6 mb-1 transition-colors duration-300',
                            getLocalizedHref(href, pathname) === pathname
                              ? 'text-purple'
                              : 'text-title-black group-hover:text-purple'
                          )}
                        >
                          {title}
                        </p>
                        <p
                          className={twJoin(
                            'text-sm transition-colors duration-300',
                            getLocalizedHref(href, pathname) === pathname
                              ? 'text-purple'
                              : 'text-secondary-text group-hover:text-purple'
                          )}
                        >
                          {description}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="sub-menu-side-block z-10 w-screen overflow-x-hidden bg-[#F4F5FF] px-8 py-8 text-xs">
                  <div className="max-w-67.5">
                    {(() => {
                      switch (href) {
                        case PagePathnamesEnum.Solutions:
                          return (
                            <>
                              <p className="mb-2 text-secondary-text">Explore our Case Studies</p>
                              <Link
                                onClick={closeSubMenu}
                                href={`${PagePathnamesEnum.CaseStudies}/market-hall-dome-plymouth-screenberry-media-server`}
                                className="group"
                              >
                                <Image
                                  width={270}
                                  height={96}
                                  className="h-24 w-67.5"
                                  style={{ objectFit: 'cover' }}
                                  alt="A group of people looking at a fulldome projection inside the Devonport Market Hall's 210-degree dome theater driven by Screenberry"
                                  placeholder="blur"
                                  src={caseForSolutionMenuSrc}
                                />
                                <p className="title-m-9 mt-1 text-title-black group-hover:text-purple">
                                  Screenberry drives projection at the Devonport Market Hall 210-degree dome theater
                                </p>
                              </Link>
                            </>
                          );
                        case PagePathnamesEnum.Resources:
                          return (
                            <>
                              <p className="mb-2 text-secondary-text">Explore Screenberry video tutorials</p>
                              <Link
                                onClick={closeSubMenu}
                                href="https://www.youtube.com/watch?v=6VXL5CjdK_g"
                                target="_blink"
                                className="group"
                              >
                                <Image
                                  width={270}
                                  height={96}
                                  className="h-24 w-67.5 object-cover"
                                  alt='A poster of a Screenberry tutorial saying "ACTIVATING THE DEMO VERSION OF SCREENBERRY MEDIA SERVER"'
                                  placeholder="blur"
                                  src={demoTutorialSrc}
                                />
                                <p className="title-m-9 mt-1 text-title-black group-hover:text-purple">
                                  Screenberry media server - Activating the Demo Version
                                </p>
                              </Link>
                            </>
                          );
                        case PagePathnamesEnum.Contacts:
                          return null;

                        default:
                          return (
                            <>
                              {SoftwareRightBlock.map((item) => (
                                <div key={item.topic}>
                                  <p className="mb-1 text-secondary-text">{item.topic}</p>
                                  {item.links.map((link) => (
                                    <Link
                                      onClick={closeSubMenu}
                                      key={link.title}
                                      href={link.href}
                                      className="mb-1 block font-medium text-title-black hover:opacity-70"
                                    >
                                      {link.title}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </>
                          );
                      }
                    })()}
                    {PagePathnamesEnum.Contacts !== href && (
                      <>
                        <p className="mb-1 mt-6 text-secondary-text">Do you have a question?</p>
                        <Link
                          onClick={closeSubMenu}
                          href={PagePathnamesEnum.ContactUs}
                          className="mb-6 block font-medium text-title-black hover:opacity-70"
                        >
                          Contact our team
                        </Link>
                      </>
                    )}
                    <SocialMediaLinks
                      classFillIcon="fill-purple"
                      className="justify-between xl:gap-2"
                      classIconContainer="w-8 [&_svg]:w-4.5 [&_svg]:h-4.5 block flex rounded-full justify-center items-center h-8 bg-[#D6D7F6]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ) : (
          <li
            key={href}
            onClick={href === PagePathnamesEnum.CaseStudies ? handleClickCaseStudiesLink : undefined}
            className={navListItem}
          >
            <Link
              href={href}
              className={getInnerListItemClassName({
                href,
                pathname,
                isOpenSubMenu,
                currentMouseEnterHref,
              })}
            >
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  );
}
