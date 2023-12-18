import React, { useState } from "react";

const Formulario = ({ onSubmit }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [confirmarContrasena, setConfirmarContrasena] = useState("");

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setContrasena("");
    setConfirmarContrasena("");
  };

  const validarEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validarFormulario = (e) => {
    console.log(validarEmail(email));
    e.preventDefault();
    if (!nombre || !email || !contrasena || !confirmarContrasena) {
      window.alert('Completa todos los campos antes de enviar el formulario.');
      return; 
    }
    if (!validarEmail(email)) {
      window.alert('Ingrese un correo electrónico válido.');
      return;
    }

    if (contrasena !== confirmarContrasena) {
      window.alert('Las contraseñas no coinciden.');
      return; 
    }
    const exito = email && contrasena === confirmarContrasena;
    console.log(exito);
    const dataRegistro = {
      nombre,
      email,
      contrasena,
    }
    if (exito) {
      limpiarFormulario(); 
    }

    onSubmit(dataRegistro);
  };

  return (
    <form onSubmit={validarFormulario}>
      <div className="form-container">
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="text"
            placeholder="tuemail@ejemplo.com"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contraseña"
            className="form-control"
            id="contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />
          <input
            type="text"
            placeholder="Confirma tu contraseña"
            className="form-control"
            id="confirmarContraseña"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </form>
  );
};

export default Formulario;
