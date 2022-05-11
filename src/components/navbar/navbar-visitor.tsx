import React from 'react';
import NavbarLink from './navbar-link';

const NavbarVisitorMenu: React.FC = () => (
  <>
    <NavbarLink to="/homework">Homework</NavbarLink>
    <NavbarLink to="/about">About</NavbarLink>
    <NavbarLink to="/gallery">Gallery</NavbarLink>
    <NavbarLink to="/contact">Contact</NavbarLink>
    <NavbarLink to="/sculpture">Sculpture</NavbarLink>
  </>
);

export default NavbarVisitorMenu;

/* <NavbarLink to="/auth/login">Login</NavbarLink>
<NavbarLink to="/auth/register">Register</NavbarLink> */
