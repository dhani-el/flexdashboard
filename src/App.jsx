import React from "react";
import ReactDOM from "react-dom";


import MainContainer from "./Main";
const App = () => (
  <div style={{height:"100%"}}>
    <MainContainer/>
  </div>);
ReactDOM.render(<App />, document.getElementById("app"));
