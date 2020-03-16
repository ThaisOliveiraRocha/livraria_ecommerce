import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Carrinho from "./container/Carrinho";
import Details from "./container/Details";
import Cadastrar from "./pages/Cadastrar";
import AlterarSenha from "./pages/AlterarSenha";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/alterar" component={AlterarSenha} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/home" component={Home} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
