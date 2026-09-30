import { useEffect, useMemo } from 'react';
import gsap from 'gsap';

export default function useGsapContext(func?: gsap.ContextFunc) {
  const gsapCtx = useMemo(() => gsap.context(func ? func : () => {}), []);

  useEffect(() => () => gsapCtx.revert(), []);

  return gsapCtx;
}
