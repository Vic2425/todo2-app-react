import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false, 
      todos: [], 
      text: ''
    };
  };

  onClickHandler = (e) => {
    e.preventDefault()
    const toDos = this.state.todos.slice();
    toDos.push(this.state.text)

    this.setState({
      todos: toDos,
      text: " ",
    });
  };

  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      text : e.target.value
    });
  };

  handlerDelete = (index) => {
    this.setState({...this.state,
      todos : this.state.todos.filter((todo, idx) => idx !== index)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.onClickHandler}>
            <input type='text' name='text' value={this.state.text} onChange={this.onChangeHandler}></input>
            <button type='submit' >Add Todo</button>
          </form>
          {!!this.state.todos.length && this.state.todos.map((todo, index) => (
          <p key={index}>{todo} <button onClick={() => this.handlerDelete(index)}>Delete</button></p>))}
        </header>
      </div>
    );
  };
};

export default App;
