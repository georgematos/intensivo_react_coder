import React from 'react'
import If from './If'

const CondicionalComIf = props =>
  <div>
    <h2>Número: {props.numero}</h2>
    <If test={props.numero % 2 === 0}>
      <span>Par</span>
    </If>
    <If test={props.numero % 2 !== 0}>
      <span>Impar</span>
    </If>  
    
  </div>

export default CondicionalComIf