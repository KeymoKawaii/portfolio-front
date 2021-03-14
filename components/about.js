import React from "react";
import StrapiImage from './image';
import Fade from 'react-reveal/Fade';

const About = ({ about }) => {return (
    <section id='about'>
      <div className="text">
          <h2>{about.title}</h2>
          <p>{about.description}</p>
      </div>
      <Fade clear>
        <StrapiImage image={about.picture}/>
      </Fade>
    </section>
  );
};

export default About;