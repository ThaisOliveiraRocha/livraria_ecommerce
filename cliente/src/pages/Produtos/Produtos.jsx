import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { GlobalStyles } from "../../assets/styles/GlobalStyles";
import { Body, FormComponent, Select, Row, Col } from "./Produtos.styles";
import Layout from "../../components/Layout";
import InsertBook from "../../container/InsertBook";
import UpdateBook from "../../container/UpdateBook";
import DeleteBook from "../../container/DeleteBook";
import Titulo from "../../components/Title";
import Texto from "../../components/Text";
import Button from "../../components/Button";

const Produtos = props => (
  <>
    <Layout>
      <Body>
        <FormComponent>
          <Row>
            <Titulo font="20px">Gerenciar Produtos</Titulo>
          </Row>
          <Row>
            <Col>
              <Titulo>Selecione a opção desejada</Titulo>
              <Select>
                <option></option>
                <option value="cadastrar">Cadastrar</option>
                <option value="alterar">Alterar</option>
                <option value="excluir">Excluir</option>
              </Select>
            </Col>
          </Row>
          <Row>
            <Button>
              <Texto color="white">Continuar</Texto>
            </Button>
          </Row>
        </FormComponent>

        <InsertBook />
      </Body>
    </Layout>
  </>
);

Produtos.propTypes = {
  // bla: PropTypes.string,
};

Produtos.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Produtos);
