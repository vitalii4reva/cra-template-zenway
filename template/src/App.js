import React from "react";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import "./styles/App.css";

import Main from "./views/Main/Main.component";

export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="*">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
