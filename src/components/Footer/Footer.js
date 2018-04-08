import React from 'react';
import PropTypes from 'prop-types';

import './style';

const Footer = (props, context) => {
  const { theme: { colorPrimary, textPrimary } } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>Com  <a href="https://github.com/donsalvadori" target="_blank" rel="noopener noreferrer" style={{ color: colorPrimary }}><span role="img" aria-label="heart">❤️ </span>la Frontera Design</a></div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;