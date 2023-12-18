import React from 'react';

const Alert = ({ mensaje }) => {
  console.log("Mensaje:", mensaje);
  return (
    <div className={`alert ${mensaje.includes('exitoso') ? 'alert-success' : 'alert-danger'}`}>
      {mensaje}
    </div>
  );
};

export default Alert;
