import React from "react";
import PropTypes from "prop-types";
import {
  CardContainer,
  CardBody,
  TopCard,
  ImageCard,
  InfoCard,
  CardButton,
  Button,
  Titulo,
  Texto
} from "./Card.styles";

const Card = props => (
  <CardContainer>
    <CardBody>
      <TopCard>
        <Titulo>Nome Livro</Titulo>
        <ImageCard src={require("../../../../assets/images/book1.png")} />
      </TopCard>
      <InfoCard>
        <Texto>Autor</Texto>
        <Texto>Ano</Texto>
        <Texto>Genero</Texto>
        <Texto>Preço</Texto>
        <Texto>Situacao</Texto>
      </InfoCard>
    </CardBody>
    <CardButton>
      <Button>Comprar</Button>
    </CardButton>
  </CardContainer>
);

Card.propTypes = {
  // bla: PropTypes.string,
};

Card.defaultProps = {
  // bla: 'test',
};

export default Card;
