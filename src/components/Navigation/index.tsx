import React, { useEffect, useState } from 'react';

import { NavigationMobile } from './mobile/Navigation.mobile';
import { NavigationWeb } from './Navigation.web';

export function Navigation(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (window.innerWidth <= 576) {
      return true;
    }
    return false;
  });

  function handleResize() {
    if (window.innerWidth <= 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return isMobile === false ? <NavigationWeb /> : <NavigationMobile />;
}
