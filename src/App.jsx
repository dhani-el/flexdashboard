import React from "react";
import ReactDOM from "react-dom";

import Analytics from "./Analytics/Jsx";

const App = () => (
  <div className="container">
    <Analytics/>
  </div>);
ReactDOM.render(<App />, document.getElementById("app"));
