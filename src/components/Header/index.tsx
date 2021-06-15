import React, { useEffect, useState } from 'react';

import { HeaderWeb } from './Header';
import { HeaderMobile } from './mobile/Header.mobile';

export function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  function handleResize() {
    if (window.innerWidth <= 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, [window, handleResize]);

  return isMobile === false ? <HeaderWeb /> : <HeaderMobile />;
}
