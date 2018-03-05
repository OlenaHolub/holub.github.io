import React from 'react';
import Link from 'gatsby-link';
import footerStyles from '../../styles/footer.module.css';
import contacts from '../../constants/contacts';

const Footer = () => (
  <div className={footerStyles.footerWrapper}>
    <div className={footerStyles.footer}>
      <div className={footerStyles.mail}>
        <span>else.golub@gmail.com</span>
        <span>096-847-72-82</span>
      </div>
      <ul className={footerStyles.ul}>
        {contacts.map(item => (
          <li className={footerStyles.li}>
            <a href={item.link} className={item.icon} />
          </li>))}
      </ul>
    </div>
  </div>
);

export default Footer;
