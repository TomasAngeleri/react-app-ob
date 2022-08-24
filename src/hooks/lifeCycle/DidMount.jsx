/**
 * Ejemplo componente clase y componenteHook
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

  componentDidMount(){
    console.log('Antes de que el componente sea añadido al DOM');
  }

  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidMountHook = () => {

  useEffect(() => {
    console.log('Antes de que el componente sea añadido al DOM'); 
  }, [])

  return (
    <div>DidMountHook</div>
  )
}

export default DidMountHook
