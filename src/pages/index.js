import React from 'react';
import indexStyles from '../styles/index.module.css';

const IndexPage = () => (
    <div className={indexStyles.wrapper}>
        <div className={indexStyles.index}>
            <div className={indexStyles.photo}>
                <p></p>
            </div>
            <div className={indexStyles.about}>
                <p>Hi! My name is Olena Holub! I have an experience in
                    developing web apps using Python framework Django and Django
                    Rest Framework for building REST architecture. Also I have
                    experience in developing front-end, using such technologies
                    as HTML, CSS, SASS, JavaScript, React and Bootstrap. I've
                    used PostgreSQL, SQLite and MySQL. I'm able to work in team,
                    using Agile/Scrum methodologies for work organization. I use
                    Linux as main OS and Git as a VCS.</p>
            </div>
        </div>
    </div>
);

export default IndexPage
