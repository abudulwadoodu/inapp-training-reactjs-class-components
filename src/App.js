import ParentComponent from "./components/ParentComponent";
import { Component } from "react";
import './App.css';

class App extends Component {
  render() {
      return(
        <>
          <ParentComponent />
        </>
      )
  }
}

export default App