import React, {useState,useEffect, useRef} from 'react'

export const Ejemplo2 = () => {

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Creo referencia con useRef() para asociar una variable con un elemento del DOM
  const miRef = useRef();

  const incrementarUno = () => {
    setContador1(contador1 + 1);
  }

  const incrementarDos = () => {
    setContador2(contador2 + 1);
  }

  useEffect(() => {
    console.log(miRef);
  })

  useEffect(() => {
    console.log('Cambiando contador 1');
    console.log(miRef);
  },[contador1])
  

  return (
    <div>
      <h1>Ejemplo useStates(), useEffect(), useRef()</h1>
      <h2>Contador1 {contador1}</h2>
      <h2>Contador2 {contador2}</h2>
      {/* Elemento referenciado */}
      <h4 ref={miRef}>
        Ejemplo de elemento referenciado
      </h4>
      <div>
        <button onClick={incrementarUno}>Incrementar contador 1</button>
        <button onClick={incrementarDos}>Incrementar contador 2</button>
      </div>
    </div>
  )
}
