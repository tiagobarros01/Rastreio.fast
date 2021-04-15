/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import HeaderContent from './style';

function Header() {
  return (
    <>
      <HeaderContent>
        <div>
          <ul>
            <a href="#">
              <li>Integrations</li>
            </a>
            <a href="#">
              <li>Search CEP</li>
            </a>
            <a href="#">
              <li>Login</li>
            </a>
            <a href="#">
              <li>Sign In</li>
            </a>
          </ul>
        </div>
      </HeaderContent>
    </>
  );
}

export default Header;
