import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  TableCart,
  TituloTopo,
  Cabecalho,
  Item,
  BodyCart,
  ButtonContainer,
  Input,
  ImageTrash,
  TotalContainer
} from "./ListaCarrinho.styles";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";

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
            <Cabecalho>
              <Titulo>Título</Titulo>
            </Cabecalho>
            <Cabecalho>
              <Titulo>Preço</Titulo>
            </Cabecalho>
            <Cabecalho>
              <Titulo>Quantidade</Titulo>
            </Cabecalho>
            <Cabecalho>
              <Titulo>Descartar</Titulo>
            </Cabecalho>
          </TituloTopo>
          <TituloTopo>
            <Item>
              <Text>Nome</Text>
            </Item>
            <Item>
              <Text>Preço</Text>
            </Item>
            <Item>
              <Input type="number" min="0" name="quantidade" />
            </Item>
            <Item>
              <ImageTrash
                src={require("../../../../assets/images/excluir.png")}
              />
            </Item>
          </TituloTopo>
        </TableCart>
        <TotalContainer>
          <Titulo>Total da compra:</Titulo>
          <Text>R$ total</Text>
        </TotalContainer>
        <ButtonContainer>
          <Button background="green">Finalizar</Button>
          <Button background="red">Cancelar</Button>
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
