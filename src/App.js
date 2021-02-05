import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import * as ROUTE from "./constants/routes";
import Navigation from "./components/Navigation";

import Home from "./pages/home";
import PageNotFound from "./pages/error";
import { AddNote, EditNote } from "./pages/note";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Navigation />
      <main className="content">
        <Switch>
          <Route component={Home} exact path={ROUTE.HOME} />
          <Route component={AddNote} exact path={ROUTE.ADD_NOTE} />
          <Route component={EditNote} exact path={ROUTE.EDIT_NOTE} />
          <Route component={PageNotFound} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
