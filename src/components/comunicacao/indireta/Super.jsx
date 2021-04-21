import React, { useState } from 'react'
import Sub from './Sub'

// Passar a função para o componente filho através de uma propriedade
// dessa forma o comp filho irá executar a função do componente pai
// podendo inclusive passar parametros.
const Super = props => {
  
  const [num, setNum] = useState(0)
  const [msg, setMsg] = useState("")
  
  const click = (number, msg) => {
    setNum(number)
    setMsg(msg)
  }

  return (
    <div>
      <h4>Valor: {num}</h4>
      <Sub whenClicked={click}></Sub>
      <h3>Msg: {msg}</h3>
    </div>
  )
}

export default Super