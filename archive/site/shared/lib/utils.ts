import debounce from 'debounce';
import gsap from 'gsap';
import { useEffect, useLayoutEffect, useState } from 'react';

export const isBrowser = typeof window !== 'undefined';

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export function changePositionUnderline(anchor: string | null = null, classNameLink: string) {
  if (!anchor) return;
  const caseTypeElement = document.querySelector(`#${anchor}`) as HTMLElement;

  gsap.set(`.${classNameLink}`, { borderBottomColor: 'transparent' });
  gsap.set('.slide-line', {
    width: caseTypeElement?.clientWidth,
    left: caseTypeElement?.offsetLeft,
    autoAlpha: 0,
  });
  gsap.set(caseTypeElement, { borderBottomColor: '#443cb5' });
}

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const updateSize = () => setIsDesktop(window.innerWidth >= 1280);

    window.addEventListener('resize', debounce(updateSize, 200));
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return isDesktop;
}
