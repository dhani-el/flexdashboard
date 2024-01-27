import React from "react";
import ReactDOM from "react-dom";

import Analytics from "./Analytics/Jsx";
import Navigation from "./Navigation/jsx";

const App = () => (
  <div className="container">
    <Navigation/>
    <Analytics/>
  </div>);
ReactDOM.render(<App />, document.getElementById("app"));
