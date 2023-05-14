"use client"; // This is a client component 👈🏽

import React from 'react';
import { stack as Menu } from 'react-burger-menu';

const RightSidebar = () => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
    </Menu>
  );
};

export default RightSidebar;