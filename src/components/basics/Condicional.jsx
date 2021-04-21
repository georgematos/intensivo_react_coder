import React from 'react'

const Condicional = props =>
  <div>
    <h2>Número: {props.numero}</h2>
    {
      (props.numero % 2 === 0) ?
      <span>Par</span> :
      <span>Impar</span>
    }
  </div>

export default Condicional