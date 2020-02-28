import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Carrinho from "";
import PrivateRoute from "";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
