/**
 * Ejemplo de clase con componentDidUpdate y ejemplo con hook
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

  componentDidUpdate(){
    console.log('Comportamiento cuando el componente recibe nuevos prop y cambio es su estado privado')
  }

  render() {
    return (
      <div><h1>DidUpdate</h1></div>
    )
  }
}

export const DidUpdateHook = () => {
  useEffect(() => {
    console.log('No hay dependencias, se ejecuta cada vez que hay cambios en el estado o en las props');
  },)
  
  return (
    <div>DidUpdate</div>
  )
}