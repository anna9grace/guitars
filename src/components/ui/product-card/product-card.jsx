import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './product-card.module.scss';
import photo from '../../../assets/img/chester_bass.png';
import photo2X from '../../../assets/img/chester_bass@2x.png';
import cartIcon from './icon_to-cart.svg';
import Rating from '../rating/rating';
import Button from '../button/button';

function ProductCard({className}) {

  // const guitars =
  //   {
  //     'article' : 'SO757575',
  //     'id' : 1,
  //     'name' : 'Честер Bass',
  //     'picture' : 'chester_bass',
  //     'price' : 17500,
  //     'reviews' : 15,
  //     'strings' : 7,
  //     'type' : 'electric',
  //   };


  return (
    <article className={classNames(styles.wrapper, className)}>
      <div className={styles.photo}>
        <picture>
          <img src={photo} alt="Честер Bass" width="80" height="202"
            srcSet={photo2X}
          />
        </picture>
      </div>
      <div className={styles.inner}>
        <div className={styles.rating}>
          <Rating rating={4.5}/>
          <span className={styles.reviews}>15</span>
        </div>
        <div className={styles.info}>
          <p>Честер Bass</p>
          <p><span>17500</span> ₽</p>
        </div>
        <div className={styles.buttons}>
          <Button to={'/#'} secondary>Подробнее</Button>
          <Button to={'/#'} primary icon>
            <img src={cartIcon} alt='' width='12' height='12'/>
            <span>Купить</span>
          </Button>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  className: PropTypes.string,
};

export default ProductCard;
