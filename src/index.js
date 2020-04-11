import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import jokeFacade from "./jokeFacade";

import "./index.css";

const AppWithRouter = () => {
  return (
    <Router>
      <App  jokeFacade={jokeFacade} />
    </Router>
  );
};
ReactDOM.render(<AppWithRouter />, document.getElementById("root"));