import React from 'react'

import './App.css'

import Card from './components/layout/Card'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import ComFilhos from './components/basics/ComFilhos'
import Condicional from './components/basics/Condicional'
import Repeticao from './components/basics/Repeticao'
import CondicionalComIf from './components/basics/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'
import Input from './components/forms/Input'
import Contador from './components/contador/Contador'

const App = props =>
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card title="#01 - Primeiro Componente" color="#FA6900">
        <Primeiro />
      </Card>
      <Card title="#02 - Componente Com Parametro" color="#002C5B">
        <ComParametro title="Esse é o título" subtitle="Esse é o Subtítulo" />
        <ComParametro title="Opa" subtitle="Epa" />
      </Card>
      <Card title="#03 - Componente Com 'Filhos'" color="#189AB4">
        <ComFilhos>
          <ul>
            <li>Elemento filho 1</li>
            <li>Elemento filho 2</li>
            <li>Elemento filho 3</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card title="#04 - Repetição" color="#FFAB00">
        <Repeticao />
      </Card>
      <Card title="#05 - Condicional" color="#002C5B">
        <Condicional numero={3} />
      </Card>
      <Card title="#06 - Condicional Com If" color="#FA6900">
        <CondicionalComIf numero={6} />
      </Card>
      <Card title="#07 - Comunicação Direta" color="#FFAB00">
        <Pai sobrenome="Matos"></Pai>
      </Card>
      <Card title="#08 - Comunicação Indireta" color="#FA6900">
        <Super></Super>
      </Card>
      <Card title="#09 - Form Input" color="#189AB4">
        <Input></Input>
      </Card>
      <Card title="#10 - Contador" color="#002C5B">
        <Contador passo={2} valor={1}></Contador>
      </Card>
    </div>
  </div>

export default App