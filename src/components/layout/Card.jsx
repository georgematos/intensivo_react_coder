import React from 'react'
import './Card.css'

const Card = props =>
  <div className="Card">
    <div className="Title">
      {props.title}
    </div>
    <div className="Content">
      {props.children}
    </div>
  </div>

export default Card