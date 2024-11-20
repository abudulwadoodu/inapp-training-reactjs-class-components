import Todo from "./components/Todo";
import RandomTexts from "./components/RandomTexts";
import { Component } from "react";
import './App.css';

class App extends Component {
  render() {
      return(
        <div className="app-container">
          <Todo />
          <RandomTexts />
        </div>
      )
  }
}

export default App