import React from 'react';
import Logo from "@/components/Logo";
import {Navigation} from "@/components/Navigation";

const Header = () => {
  return (
    <div className="px-4 py-2 fixed top-0 left-0 right-0 flex items-center justify-between">
      <Logo/>
      <Navigation/>
      <span>Войти</span>
    </div>
  );
};

export default Header;