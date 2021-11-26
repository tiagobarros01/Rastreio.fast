import React, { useEffect, useState } from 'react';

import { NavigationMobile } from './mobile/Navigation.mobile';
import { NavigationWeb } from './Navigation.web';

export const Navigation = (): JSX.Element => {
  const [isMobile, setIsMobile] = useState(() => {
    if (window.innerWidth <= 576) {
      return true;
    }
    return false;
  });

  const handleResize = () => {
    if (window.innerWidth <= 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return !isMobile ? <NavigationWeb /> : <NavigationMobile />;
};
