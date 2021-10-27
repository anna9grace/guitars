import React from 'react';
import PropTypes from 'prop-types';
import LinksList from '../links-list/links-list';
import { NavLinks } from '../../../const';

function Navbar({currentPage, className}) {
  const navLinks = [
    {
      name: NavLinks.CATALOG,
      href: '/',
    },
    {
      name: NavLinks.WHERE_BUY,
      href: '/where-to-buy',
    },
    {
      name: NavLinks.ABOUT,
      href: '/about',
    },
    {
      name: NavLinks.SERVICE,
      href: '/service-centres',
    },
  ];

  return (
    <nav className={className}>
      <LinksList links={navLinks} currentPage={currentPage} />
    </nav>
  );
}

Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Navbar;
