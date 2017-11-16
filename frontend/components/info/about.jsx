import React from 'react';

const About = () => {
  return (
    <section className="about">
      <p>Hi, I'm Thuy. I am a web developer based in NYC. This is a single-page app, inspired by a blogging platform called Medium. It is built with React/Redux on the frontend and Ruby/Rails on the backend. Data storage is handled through PostgreSQL, while images are hosted on AWS. Get in touch!</p>
      <ul>
        <li><a href="https://github.com/thuyD/channel"><i className="fa fa-github" aria-hidden="true"></i></a></li>
        <li><a href="https://www.linkedin.com/in/thuy-dao/"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
        <li><i className="fa fa-grav" aria-hidden="true"></i></li>
      </ul>
    </section>
  );
};

export default About;
