import React from 'react'

import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Condicional from './components/basics/Condicional'
import Repeticao from './components/basics/Repeticao'
import CondicionalComIf from './components/basics/CondicionalComIf'

const App = props =>
  <div className="App">
    <Card title="#01 - Primeiro Componente">
      <Primeiro />
    </Card>
    <Card title="#02 - Componente Com Parametro">
      <ComParametro title="Esse é o título" subtitle="Esse é o Subtítulo" />
      <ComParametro title="Opa" subtitle="Epa" />
    </Card>
    <Card title="#03 - Componente Com 'Filhos'">
      <ComFilhos>
        <ul>
          <li>Elemento filho 1</li>
          <li>Elemento filho 2</li>
          <li>Elemento filho 3</li>
        </ul>
      </ComFilhos>
    </Card>
    <Card title="#04 - Repetição">
      <Repeticao />
    </Card>
    <Card title="#05 - Condicional">
      <Condicional numero={3} />
    </Card>
    <Card title="#06 - Condicional Com If">
      <CondicionalComIf numero={6} />
    </Card>
  </div>

export default App