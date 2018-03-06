import React from 'react';
import aboutStyles from '../styles/about.module.css';
import projectsDesktop from '../constants/projects_desktop';
import projectsMobile from '../constants/projects_mobile';

const Example = props => (
  <div>
    <img src={props.source} alt={props.alternative} title={props.title} />
  </div>
);

const Projects = props => (
  <div className={props.nameClass}>
    {props.projects.map(item => (
      <Example
        source={item.source}
        alternative={item.alternative}
        title={item.title}
      />))
    }
  </div>
);

export const query = graphql`
query IndexQuery {
allMarkdownRemark {
  edges {
    node {
      id
      frontmatter {
          title
      }
      excerpt(pruneLength:700)
    }
  }
}
}
`;

const AboutPage = ({ data }) => (
  <div className={aboutStyles.about}>
    <Projects projects={projectsDesktop}
              nameClass={aboutStyles.exampleDesktop} />
    <Projects projects={projectsMobile} nameClass={aboutStyles.exampleMobile} />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div className={aboutStyles.exampleText}>
        <h3>{node.frontmatter.title}</h3>
        <p>{node.excerpt}</p>
      </div>
    ))}
  </div>
);

export default AboutPage;
