import debounce from 'debounce';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from '../utils';

export default function useDevice() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1280);
      setIsDesktop(window.innerWidth >= 1280);
    };

    window.addEventListener('resize', debounce(handleResize, 200));
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet, isDesktop };
}
