import React from 'react';
import NavbarLink from './navbar-link';

const NavbarVisitorMenu: React.FC = () => (
  <>
    <NavbarLink to="/about">About</NavbarLink>
    <NavbarLink to="/gallery">Gallery</NavbarLink>
    <NavbarLink to="/contact">Contact</NavbarLink>
  </>
);

export default NavbarVisitorMenu;
