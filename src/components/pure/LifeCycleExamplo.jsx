
import React, { Component } from 'react'

export default class LifeCycleExamplo extends Component {
  
  constructor(props){
    super(props);
    console.log('CONSTRUCTOR: Se instancia el componente');
  }

  componentWillMount(){
    console.log('WillMoint: Antes del montaje de un componente',)
  }

  componentDidMount(){
    console.log('DIDMOUNT: Metodo antes de renderizarlo',)
  }

  componentDidUpdate(){
    console.log('ComponentWillMoint: Antes del montaje de un componente',)
  }

  componentDidMount(){
    console.log('ComponentWillMoint: Antes del montaje de un componente',)
  }

  render() {
    return (
      <div>LifeCycleExamplo</div>
    )
  }
}
