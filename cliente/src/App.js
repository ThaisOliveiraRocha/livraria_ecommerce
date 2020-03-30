import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Carrinho from "./container/Carrinho";
import Details from "./container/Details";
import Cadastrar from "./pages/Cadastrar";
import AlterarSenha from "./pages/AlterarSenha";
import Gerenciar from "./pages/Gerenciar";
import Produtos from "./pages/Produtos";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/alterar" component={AlterarSenha} />
        <Route path="/cadastrar" component={Cadastrar} />
        <Route path="/home" exact={true} component={Home} />
        <Route path="/carrinho" component={Carrinho} />
        <Route path="/details" component={Details} />
        <Route path="/gerenciar" component={Gerenciar} />
        <Route path="/gerenciarProdutos" component={Produtos} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
