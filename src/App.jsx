import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: flexdashboard</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS not for long</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));