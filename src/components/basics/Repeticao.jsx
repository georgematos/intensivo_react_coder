import React from 'react'
import products from '../../data/products'

function getProducts () {
  return products.map(p => 
    <li key={p.id}>
      {p.nome} - R${p.preco}
    </li>
  )
}

const Repeticao = props =>
  <div>
    <h2>Repeticao</h2>
    <ul>
      {getProducts()}
    </ul>
  </div>

export default Repeticao