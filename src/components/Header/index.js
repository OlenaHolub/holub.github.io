import React from 'react';
import Link from 'gatsby-link';
import headerStyles from '../../styles/header.module.css';

const ListLink = props => (
  <li className={headerStyles.li}>
    <Link to={props.to} className={headerStyles.link}>
      {props.children}
    </Link>
  </li>
);

const Header = () => (
  <div className={headerStyles.headerWrapper}>
    <div className={headerStyles.header}>
      <div className={headerStyles.title}>
        <h1>Olena Holub</h1>
      </div>
      <ul className={headerStyles.ul}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="about">About</ListLink>
        <ListLink to="contact">Contact</ListLink>
      </ul>
    </div>
  </div>
);

export default Header;
