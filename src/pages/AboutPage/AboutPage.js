import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I adore modern <span className="highlight">JavaScript</span> and
              and web engineering.
            </p>
            <p>
              Constantly striving to better myself as a professional and full-time human-being {' '}
              by persuing my many passions. I am close to
              the programming community by attending meetups in PDX, engaging in discussions through social media,
              and purchasing educational content to stay fresh as a developer. 
            </p>
            <p> 
              I also like to write comedy, train as a boxer, read fiction, obsess over 1st party <a target="_blank" rel="noopener noreferrer" href="https://ibb.co/kFmZWc"><span className="highlight">Nintendo</span></a> franchises,
              and shoot photography with my Olympus camera. I also am conversational in Brazilian portuguese, 
              então fique à vontade para falar comigo ;).
            </p>
            <p>
              I built this responsive portfolio site using only best practices with React and responsive design.
            </p>
            <p>
              Modern Javascript, React-Redux, Node.js, Docker, and
              AWS are the main tricks up my sleeve. I also have a keen eye for design and dable in Sketch.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;