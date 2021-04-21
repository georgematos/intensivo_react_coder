import React from 'react'

const Filho = props => {
  return (
    <div>
      <button onClick={
        () => props.whenClicked((Math.random()) * 10, "from Child")
      }>
        Alterar</button>
    </div>
  )
}

export default Filho