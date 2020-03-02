import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { 
  TableCart, 
  TituloTopo, 
  Cabecalho, 
  Item, 
  BodyCart, 
  ButtonContainer, 
  ButtonCancelar, 
  ButtonFinalizar,
  Texto 
} from "./ListaCarrinho.styles";

class ListaCarrinho extends PureComponent {
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
      <BodyCart>
        <TableCart>
          <TituloTopo>
            <Cabecalho>Título</Cabecalho>
            <Cabecalho>Preço</Cabecalho>
            <Cabecalho>Quantidade</Cabecalho>
            <Cabecalho>Descartar</Cabecalho>
          </TituloTopo>
          <TituloTopo>
            <Item>Nome</Item>
            <Item>preco</Item>
            <Item>qtd</Item>
            <Item>btn</Item>
          </TituloTopo>
          <TituloTopo>
            <Item>Nome</Item>
            <Item>preco</Item>
            <Item>qtd</Item>
            <Item>btn</Item>
          </TituloTopo>
        </TableCart>

        <ButtonContainer>
          <Texto>Total da Compra: </Texto>
          <ButtonFinalizar type="button">Finalizar</ButtonFinalizar>
          <ButtonCancelar type="button">Cancelar</ButtonCancelar>
        </ButtonContainer>
      </BodyCart>
    );
  }
}

ListaCarrinho.propTypes = {
  // bla: PropTypes.string,
};

ListaCarrinho.defaultProps = {
  // bla: 'test',
};

export default ListaCarrinho;
