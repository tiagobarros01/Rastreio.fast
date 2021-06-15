import React, { useEffect, useState } from 'react';

import { NavigationMobile } from './mobile/Navigation.mobile';
import { NavigationWeb } from './Navigation.web';

export function Navigation() {
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

  return isMobile === false ? <NavigationWeb /> : <NavigationMobile />;
}
