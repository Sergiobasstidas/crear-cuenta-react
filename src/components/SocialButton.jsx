import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function SocialButton(props) {
  const { facebookIcon, githubIcon, linkedinIcon } = props;

  return (
    <div className='container-buttons'>
      <div>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="btn btn-social">
          <FontAwesomeIcon icon={facebookIcon} size="2x" /> {/* Tamaño 2x */}
        </a>

        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-social">
          <FontAwesomeIcon icon={githubIcon } size="2x" />
        </a>

        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="btn btn-social">
          <FontAwesomeIcon icon={linkedinIcon } size="2x" />
        </a>
      </div>
      <label htmlFor="nombre" className="form-label">O usa tu nombre para registrarte.</label>
    </div>
  );
}

export default SocialButton;
