import React from "react";

import "./App.css";
import Calculator from "./components/Calculator";
import Output from "./components/Output";
import Hello from "./components/hello";

function App() {
  return (
    <div className="App">
      <Calculator />
      <Output />
      <Hello />
    </div>
  );
}

export default App;
