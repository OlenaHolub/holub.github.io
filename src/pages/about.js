import React from 'react';
import aboutStyles from '../styles/about.module.css';
import { projects } from '../constants/projects';

const Example = props => (
  <div className={aboutStyles.example}>
    <img src={props.source} alt={props.alternative} title={props.title} />
  </div>
);

const AboutPage = () => (
  <div className={aboutStyles.wrapper}>
    <div className={aboutStyles.index}>
      {projects.map(item => (
        <Example
          source={item.source}
          alternative={item.alternative}
          title={item.title}
        />))}
    </div>
  </div>
);

export default AboutPage;

