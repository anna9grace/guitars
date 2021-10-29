import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './breadcrumbs.module.scss';

function Breadcrumbs({links, className}) {
  const renderBreadcrumb = (link) => {
    const Tag = link.path ? Link : 'span';

    return (
      <li className={styles.item}>
        <Tag
          to={link.path ?? undefined}
        >
          {link.name}
        </Tag>
      </li>
    );
  };


  return (
    <ul className={classNames(className, styles.list)}>
      {links.map((link) => renderBreadcrumb(link))}
    </ul>
  );
}

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;
