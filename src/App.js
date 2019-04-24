import React, { Component } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header />
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;
