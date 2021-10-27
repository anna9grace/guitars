import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './links-list.module.scss';

function LinksList({currentPage = '', className, links, isColumn}) {
  const renderLink = (linkData) => {
    const isCurrentLink = currentPage === linkData.name;
    const Tag =  isCurrentLink ? 'p' : Link;

    return (
      <Tag to={isCurrentLink ? undefined : linkData.href}>
        {linkData.name}
      </Tag>
    );
  };

  return (
    <ul className={classNames(className, styles.list, isColumn ? styles.list_column : '')}>
      {
        links.map((link) => (
          <li key={link.name} className={styles.item}>
            {renderLink(link)}
          </li>
        ))
      }
    </ul>
  );
}

LinksList.propTypes = {
  currentPage: PropTypes.string,
  className: PropTypes.string,
  isColumn: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LinksList;
