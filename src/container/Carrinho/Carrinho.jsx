import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import ListaCarrinho from "./components/ListaCarrinho/ListaCarrinho";
import Layout from '../../components/Layout';
import Header from '../../components/Header';
// import {} from "./Carrinho.styles";

class Carrinho extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <Layout>
        <ListaCarrinho />
      </Layout>
    );
  }
}

Carrinho.propTypes = {
  // bla: PropTypes.string,
};

Carrinho.defaultProps = {
  // bla: 'test',
};

export default Carrinho;
