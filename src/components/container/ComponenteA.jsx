import React from 'react'
import Contacto from '../../models/Contacto.class';
import ComponenteB from '../pure/ComponenteB';

function ComponenteA() {
  const defaultContact = new Contacto('Tomi', 'Angeleri', 'tomi.angeleri94@gmail.com', false);
  return (
    <div>
      <div><h1>Contacto</h1></div>
      <ComponenteB
        contacto={defaultContact}
      />
    </div>
  )
}

export default ComponenteA