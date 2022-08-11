import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Contacto from '../../models/Contacto.class';

const ComponenteB = ({ contacto }) => {
  const [conectado, setconectado] = useState(contacto.conectado);
  const handleConnect = () => {
    contacto.conectado = !contacto.conectado;
    setconectado(contacto.conectado);
  }
  return (
    <div>
      <h3>Nombre: {contacto.nombre}</h3>
      <h3>Apellido: {contacto.apellido}</h3>
      <h3>Email: {contacto.email}</h3>
      <h3>{conectado ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
      <button onClick={handleConnect}>
        {conectado ? 'Cerrar Sesion' : 'Iniciar Sesion'}
      </button>
    </div>
  );
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ComponenteB;