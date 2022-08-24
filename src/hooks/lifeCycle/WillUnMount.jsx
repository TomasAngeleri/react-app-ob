import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

  componentWillUnmount(){
    console.log('Comportamiento antes de que se desmonte el componente');
  }
  render() {
    return (
      <div>
        <h1>
          WillUnMount
        </h1>
      </div>
    )
  }
};


export const WillUnMountHook = () => {
  useEffect(() => {
    return () => {
      console.log('Comportamiento antes de que se desmonte el componente');
    } 
  }, [])
  
  return (
    <div>WillUnMount</div>
  )
}

