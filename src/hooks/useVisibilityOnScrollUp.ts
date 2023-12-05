import { useState, useEffect } from 'react';

const useVisibilityOnScrollUp = (): {
  visible: boolean;
  lastScroll: number;
} => {
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScroll, setLastScroll] = useState<number>(0);

  useEffect(() => {
    if (!window) return;

    const controlVisibility = (): void => {
      if (!window) return;
      setVisible(!(window.scrollY > 0 && window.scrollY > lastScroll));
      setLastScroll(window.scrollY);
    };

    window.addEventListener('scroll', controlVisibility);

    return (): void => window.removeEventListener('scroll', controlVisibility);
  }, [lastScroll]);

  return { visible, lastScroll };
};

export { useVisibilityOnScrollUp };
