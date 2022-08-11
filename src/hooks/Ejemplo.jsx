import React, { useState } from 'react'

const Ejemplo = () => {
  // Valor inicial para un contador
  const valorInicial = 0;

  // Valor inicial para un persona
  const personaInicial = {
    nombre: 'Tomas',
    email: 'tomi.angeleri@hotmail.com'
  };

  /**
   * Queremos que el VALORINICIAL y PERSONAINICIAL sean
   * parte del estado del componente para asi poder gestionar su cambio
   * y que este se vea reflejado en la vista del componente.
   * 
   */

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  const incrementarContador = () => {
    setContador(contador + 1);
  }


  const actualizarPersona = (nombre) => {
    setPersona({
      nombre: 'Tomangi',
      email: 'tomi.angeleri94@gmail.com'
    })
  }
  return (
    <div>
      <h1>Ejemplo de useState()</h1>

      <h2>Contador: {contador}</h2>

      <h2>Datos de la persona</h2>
      <h3>Nombre:  {persona.nombre} </h3>
      <h3>Email:  {persona.email} </h3>

      <button onClick={incrementarContador}>Sumar</button>
      <br />
      <button onClick={actualizarPersona}>Actualizar Persona</button>

    </div>
  )
}

export default Ejemplo;