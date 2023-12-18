import React, { useState } from 'react';
import Formulario from './Formulario';
import SocialButton from './SocialButton';
import Alert from './Alert';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Registro = () => {
  const [mensaje, setMensaje] = useState(null);
  
  const manejarSubmit = (exito) => {
    setMensaje(exito ? 'Registro exitoso' : 'Los campos están vacíos');
  };

  return (
    <div className="container-div">
      <h2>Crea una cuenta</h2>
      <SocialButton 
        facebookIcon={faFacebook}
        githubIcon={faGithub}
        linkedinIcon={faLinkedin}
      />
      <Formulario onSubmit={manejarSubmit} />
      {mensaje && <Alert mensaje={mensaje} />} 
    </div>
  );
};

export default Registro;
