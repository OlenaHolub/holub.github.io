import React from 'react';
import Link from 'gatsby-link';
import footerStyles from '../../styles/footer.module.css';

const ListLink = props => (
  <li className={footerStyles.li}>
    <a href={props.to} className={props.icon} />
  </li>
);

const Footer = () => (
  <div className={footerStyles.footerWrapper}>
    <div className={footerStyles.footer}>
      <div className={footerStyles.email}>
        <Link to="mailto:else.golub@gmail.com">else.golub@gmail.com</Link>
      </div>
      <ul className={footerStyles.ul}>
        <ListLink to="https://www.facebook.com/profile.php?id=100014815456933" icon="fa fa-facebook-square fa-lg" />
        <ListLink to="https://github.com/OlenaHolub" icon="fa fa-github-square fa-lg" />
        <ListLink to="tel:+380968477282" icon="fa fa-phone-square fa-lg" />
        <ListLink to="mailto:else.golub@gmail.com" icon="fa fa-envelope fa-lg" />
        <ListLink to="callto:+380968477282" icon="fa fa-skype fa-lg" />
      </ul>
    </div>
  </div>
);

export default Footer;
