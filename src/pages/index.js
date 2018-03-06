import React from 'react';
import homeStyles from '../styles/home.module.css';
import holub from '../img/holub.jpg';

const IndexPage = () => (
  <div className={homeStyles.home}>
    <h1>Olena Holub</h1>
    <div className={homeStyles.photo}>
      <img src={holub} alt="Olena Holub" />
    </div>
    <div className={homeStyles.about}>
      <p>Hi! My name is Olena Holub! I have an experience in
        developing web apps using Python framework Django and Django
        Rest Framework for building REST architecture. Also I have
        experience in developing front-end, using such technologies
        as HTML, CSS, SASS, JavaScript, React and Bootstrap. I've
        used PostgreSQL, SQLite and MySQL. I'm able to work in team,
        using Agile/Scrum methodologies for work organization. I use
        Linux as main OS and Git as a VCS.
      </p>
    </div>
  </div>
);

export default IndexPage;

