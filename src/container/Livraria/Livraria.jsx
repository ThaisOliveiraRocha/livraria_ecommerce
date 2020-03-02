import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import Card from "./components/Card/Card";
import {
  ModalBody,
  Table,
  Tr,
  Td,
  ImageBook,
  Input,
  ImageTrash,
  ButtonGroup
} from "./Livraria.styles";
import Button from "../../components/Button";
import Titulo from "../../components/Title";
import Text from "../../components/Text";

const Livraria = props => (
  <Layout>
    <Card />

    <ModalBody>
      <Titulo>Meu carrinho</Titulo>
      <Table>
        <Tr>
          <Td>
            <ImageBook src={require("../../assets/images/book1.png")} />
          </Td>
          <Td>
            <Text>Titulo</Text>
          </Td>
          <Td>
            <Input type="number" min="0" name="qtd_livros" />
          </Td>
          <Td>
            <Text>Preço</Text>
          </Td>
          <Td>
            <ImageTrash src={require("../../assets/images/excluir.png")} />
          </Td>
        </Tr>
      </Table>
      <ButtonGroup>
        <Button>Finalizar Compra</Button>
      </ButtonGroup>
    </ModalBody>
  </Layout>
);

Livraria.propTypes = {
  // bla: PropTypes.string,
};

Livraria.defaultProps = {};

export default Livraria;
