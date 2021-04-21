import React from 'react'

export default class Contador extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      passo: this.props.passo || 1,
      valor: this.props.valor || 0
    }
  }

  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.passo
    })
  }

  dec = () => {
    this.setState({
      valor: this.state.valor - this.state.passo
    })
  }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <p>
          <label for="passo">Config Passo:</label>
          <input id="passo" type="number" onChange={e => this.setState({
            passo: +e.target.value
          })}/>
        </p>
        <p>Passo: {this.state.passo}</p>
        <p>Valor: {this.state.valor}</p>

        <div>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>
      </div>
    )
  }
}