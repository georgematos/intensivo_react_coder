import React, { useState } from 'react'

const Input = props => {
  const [nome, setNome] = useState("")

  return (
    <div>
      <h2>{nome}</h2>
      <input 
        type="text" 
        value={nome} 
        onChange={e => setNome(e.target.value)}
      />
    </div>
  )
}

export default Input