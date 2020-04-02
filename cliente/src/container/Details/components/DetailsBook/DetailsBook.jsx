import React from "react";
import PropTypes from "prop-types";
import {
  Body,
  ImageComponent,
  Image,
  DetailsComponent,
  Row,
  Col,
  ButtonComponent
} from "./DetailsBook.styles";
import { connect } from "react-redux";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Texto from "../../../../components/Text";
import { addEditCarrinho } from "../../../../store/actions";
import { withRouter } from "react-router-dom";
import Divider from "@material-ui/core/Divider";

export const DetailsBook = ({ livro, addItemCarrinho }) => (
  <Body>
    <ImageComponent>
      <Image src={livro.imagem} />
    </ImageComponent>
    <Divider
      style={{
        width: "1px",
        height: "200px",
        marginLeft: "10px",
        marginRight: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.12)"
      }}
      orientation="vertical"
    />
    <DetailsComponent>
      <Row>
        <Col>
          <Titulo>Título</Titulo>
        </Col>
        <Col>
          <Texto>{livro.titulo}</Texto>
        </Col>
      </Row>
      <Divider
        style={{
          width: "100%",
          height: "1px",

          marginBottom: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.12)"
        }}
        orientation="horizontal"
      />
      <Row>
        <Col>
          <Titulo>Autor</Titulo>
        </Col>
        <Col>
          <Texto>{livro.autor}</Texto>
        </Col>
      </Row>
      <Divider
        style={{
          width: "100%",
          height: "1px",

          marginBottom: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.12)"
        }}
        orientation="horizontal"
      />

      <Row>
        <Col>
          <Titulo>Ano</Titulo>
        </Col>
        <Col>
          <Texto>{livro.ano}</Texto>
        </Col>
      </Row>
      <Divider
        style={{
          width: "100%",
          height: "1px",

          marginBottom: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.12)"
        }}
        orientation="horizontal"
      />

      <Row>
        <Col>
          <Titulo>Situação</Titulo>
        </Col>
        <Col>
          <Texto>{livro.situacao}</Texto>
        </Col>
      </Row>
      <Divider
        style={{
          width: "100%",
          height: "1px",

          marginBottom: "5px",
          backgroundColor: "rgba(0, 0, 0, 0.12)"
        }}
        orientation="horizontal"
      />

      <Row>
        <Col>
          <Titulo>Preço</Titulo>
        </Col>
        <Col>
          <Texto>{livro.preco}</Texto>
        </Col>
      </Row>

      <ButtonComponent>
        <Button onClick={() => addItemCarrinho(livro)}>
          <Texto color="white">Comprar</Texto>
        </Button>
      </ButtonComponent>
    </DetailsComponent>
  </Body>
);

DetailsBook.propTypes = {
  // bla: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  addItemCarrinho: livro => dispatch(addEditCarrinho(livro))
});

export default withRouter(connect(null, mapDispatchToProps)(DetailsBook));
