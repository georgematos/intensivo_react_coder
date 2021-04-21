import React from 'react'
import './Card.css'

const Card = props =>
  <div className="Card" style={{borderColor: props.color || '#000'}}>
    <div className="Title" style={{backgroundColor: props.color || '#000'}}>
      {props.title}
    </div>
    <div className="Content">
      {props.children}
    </div>
  </div>

export default Card