import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

export default function useScrollColor() {
  const [isWhite, setIsWhite] = useState<boolean>(false);
  const pathname = usePathname();
  const iconName = useMemo<string>(() => (isWhite ? 'menu' : 'menu_white'), [isWhite]);
  useEffect(() => {
    if (pathname === '/') {
      const onscroll = () => {
        const about = document.querySelector<HTMLDivElement>('#about');
        if (about && window.scrollY >= about.offsetTop) {
          setIsWhite(true);
        } else {
          setIsWhite(false);
        }
      };
      onscroll();
      window.addEventListener('scroll', onscroll);
      return () => window.removeEventListener('scroll', onscroll);
    }
    setIsWhite(true);
    return () => {};
  }, [pathname]);
  return { isWhite, iconName };
}
