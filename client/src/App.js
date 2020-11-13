import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// ----- components -------
import Login from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";

import "./styles.scss";


function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path ='/bubble-page' component={BubblePage}/>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
