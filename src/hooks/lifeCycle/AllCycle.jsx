import React, { useEffect } from 'react'

const AllCycle = () => {
  console.log('Componente creado');
  useEffect(() => {
    const intervalID = setInterval(() => {
      document.title= new Date();
      console.log('Actualizacion del componente');
    }, 10);
    return () => {
      console.log('Componente va a desaparecer');
      clearInterval(intervalID);
      document.title= 'El tiempo se ha detenido';
    }
  }, [])
  
  return (
    <div>AllCycle</div>
  )
}

export default AllCycle