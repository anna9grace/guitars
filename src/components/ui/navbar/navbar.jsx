import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss';
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

  const renderNavLinks = (data) => (
    data.map((link) => {
      const Tag = currentPage === link.name ? 'span' : Link;

      return (
        <li key={link.name} className={styles.item}>
          <Tag to={link.href}>{link.name}</Tag>
        </li>
      );
    })
  );

  return (
    <nav className={className}>
      <ul className={styles.list}>
        {renderNavLinks(navLinks)}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Navbar;
