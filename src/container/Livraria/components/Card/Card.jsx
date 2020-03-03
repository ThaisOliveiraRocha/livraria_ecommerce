import React from "react";
import PropTypes from "prop-types";
import {
  CardContainer,
  CardBody,
  TopCard,
  ImageCard,
  InfoCard,
  CardButton,
  TopTitle
} from "./Card.styles";
import { Link, withRouter } from "react-router-dom";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";

import { connect } from "react-redux";
import { addEditCarrinho, getDetail } from "../../../../store/actions";

const Card = ({ livro, addItemCarrinho, showDetails }) => {
  return (
    <CardContainer>
      <TopTitle>
        <Titulo>{livro.titulo}</Titulo>
      </TopTitle>
      <CardBody onClick={() => showDetails(livro)}>
        <TopCard>
          <ImageCard
            src={require(`../../../../assets/images/${livro.imagem}`)}
          />
        </TopCard>
        <InfoCard>
          <div>
            <Titulo>Autor </Titulo>
            <Text>{livro.autor}</Text>
          </div>
          <div>
            <Titulo>Ano </Titulo>
            <Text>{livro.ano}</Text>
          </div>
          <div>
            <Titulo>Gênero </Titulo>
            <Text>{livro.genero}</Text>
          </div>
          <div>
            <Titulo>Preço </Titulo>
            <Text>R$ {livro.preco}</Text>
          </div>
          <div>
            <Titulo>Situação </Titulo>
            <Text>{livro.situacao}</Text>
          </div>
        </InfoCard>
      </CardBody>
      <CardButton>
        <Button onClick={() => addItemCarrinho(livro)}>Comprar</Button>
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
