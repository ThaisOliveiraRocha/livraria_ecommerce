import React from "react";
import PropTypes from "prop-types";
import {
  CardContainer,
  CardBody,
  ImageCard,
  CardButton,
  TopTitle,
  Row,
  Col
} from "./Card.styles";
import { withRouter } from "react-router-dom";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Texto from "../../../../components/Text";
import { connect } from "react-redux";
import { addEditCarrinho, getDetail } from "../../../../store/actions";

export const Card = ({ livro, addItemCarrinho, showDetails }) => {
  console.log(livro);
  return (
    <CardContainer>
      <TopTitle>
        <Titulo>{livro.titulo}</Titulo>
      </TopTitle>
      <CardBody onClick={() => showDetails(livro)}>
          <ImageCard
            src={require(`../../../../assets/images/${livro.imagem}`)}
          />
          <Row>
            <Col>
              <Texto font="16px">{livro.autor}</Texto>
            </Col>
          </Row>
          <Row>
            <Col>
              <Texto font="16px">R$ {livro.preco}</Texto>
            </Col>
          </Row>
      </CardBody>
      <CardButton>
        <Button className="btnComprar" onClick={() => addItemCarrinho(livro)}>
          <Texto color="white">Comprar</Texto>
        </Button>
      </CardButton>
    </CardContainer>
  );
};

Card.propTypes = {
  // bla: PropTypes.string,
};

const mapDispatchToProps = (dispatch, { history }) => ({
  addItemCarrinho: livro => dispatch(addEditCarrinho(livro)),
  showDetails: livro => {
    dispatch(getDetail(livro));
    history.push("/details");
  }
});

export default withRouter(connect(null, mapDispatchToProps)(Card));
