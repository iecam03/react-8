import React, { Component } from 'react';
import { get } from 'enzyme/build/configuration';

class App extends Component {

  state = {
    list: [],
    inputvalue: ''
  }

  uptask = (event) => {
    var inputvalue = event.target.value
    this.setState({ inputvalue })
  }

  enter = (event) => {
    event.preventDefault()
    this.setState((prevstate) => {
      return {inputvalue: '', list: [...prevstate.list,prevstate.inputvalue]}
    })
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.list.map((task, index) => <li key={index}>{task}</li>)}
          </ul>
          <form onSubmit={this.enter}>
            <input type="text" id="new-task" onChange={this.uptask} value={this.state.inputvalue} placeholder="Ingresa una tarea y oprime Enter" />
          </form>
        </div>
      </div>
    )
  }
}
export default App;
