import React from "react";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import Home from "./pages/Home/Home";
import Carrinho from "./container/Carrinho";
import Details from "./container/Details";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
