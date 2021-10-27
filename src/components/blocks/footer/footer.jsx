import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './footer.module.scss';
import Logo from '../../ui/logo/logo';
import Socials from '../../ui/socials/socials';
import LinksList from '../../ui/links-list/links-list';

function Footer({isMain}) {
  const footerLinks = {
    catalog: [
      {
        name: 'Акустические гитары',
        href: '#',
      },
      {
        name: 'Классические гитары',
        href: '#',
      },
      {
        name: 'Электрогитары',
        href: '#',
      },
      {
        name: 'Бас-гитары',
        href: '#',
      },
      {
        name: 'Укулеле',
        href: '#',
      },
    ],
    general: [
      {
        name: 'Где купить?',
        href: '#',
      },
      {
        name: 'Блог',
        href: '#',
      },
      {
        name: 'Вопрос - ответ',
        href: '#',
      },
      {
        name: 'Возврат',
        href: '#',
      },
      {
        name: 'Сервис-центры',
        href: '#',
      },
    ],
  };


  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={classNames(styles.inner, 'container')}>

          <div classNames={styles['logo-block']}>
            <Logo isFooter isLink={!isMain}/>
            <Socials />
          </div>

          <section className={styles.info}>
            <div className={styles['info-block']}>
              <h2 className={styles['info-title']}>О нас</h2>
              <p>Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
              <p>Все инструменты проверены, отстроены и доведены до идеала!</p>
            </div>

            <div className={styles['info-block']}>
              <h2 className={styles['info-title']}>Каталог</h2>
              <LinksList links={footerLinks.catalog} isColumn/>
            </div>

            <div className={styles['info-block']}>
              <h2 className={styles['info-title']}>Информация</h2>
              <LinksList links={footerLinks.general} isColumn/>
            </div>

            <div className={styles['info-block']}>
              <h2 className={styles['info-title']}>Контакты</h2>
              <p>
                г. Санкт-Петербург,<br/>м. Невский проспект,<br/>ул. Казанская 6.
                <a className={styles.tel} href="tel:88125005050">8-812-500-50-50</a>
              </p>
              <p>
                Режим работы:
                <span className={styles.time}>с 11:00 до 20:00,</span>
                без выходных.
              </p>
            </div>
          </section>

        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isMain: PropTypes.bool,
};

export default Footer;
