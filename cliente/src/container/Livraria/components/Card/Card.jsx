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
        <TopCard>
          <ImageCard
            src={require(`../../../../assets/images/${livro.imagem}`)}
          />
        </TopCard>
        <InfoCard>
          <div>
            <Titulo>Autor </Titulo>
            <Texto>{livro.autor}</Texto>
          </div>
          <div>
            <Titulo>Ano </Titulo>
            <Texto>{livro.ano}</Texto>
          </div>
          <div>
            <Titulo>Gênero </Titulo>
            <Texto>{livro.genero}</Texto>
          </div>
          <div>
            <Titulo>Preço </Titulo>
            <Texto>R$ {livro.preco}</Texto>
          </div>
          <div>
            <Titulo>Situação </Titulo>
            <Texto>{livro.situacao}</Texto>
          </div>
        </InfoCard>
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
