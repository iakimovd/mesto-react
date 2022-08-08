import React from "react";
import headerLogo from '../images/header-logo.svg';

export function Header() {
  return (
    <header className="header">
      <img
        src={headerLogo}
        className="header__logo"
        alt="Логотип Mesto"
      />
    </header>
  )
}

