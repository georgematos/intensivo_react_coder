import React from 'react'
import Filho from './Filho'

const Pai = props =>
  <div>
    <Filho {...props}>George</Filho>
    <Filho sobrenome={props.sobrenome}>José</Filho>
    <Filho sobrenome={props.sobrenome}>Vanda</Filho>
  </div>

export default Pai