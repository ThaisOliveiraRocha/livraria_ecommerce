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

const Card = ({ props }) => {
  const onClick = event => {
    window.location.href = "/details";
  };

  return (
    <CardContainer>
      <CardBody onClick={onClick}>
        <TopCard>
          <Titulo>titulo</Titulo>
          <ImageCard src={require("../../../../assets/images/book1.png")} />
        </TopCard>
        <InfoCard>
          <Texto>autor</Texto>
          <Texto>ano</Texto>
          <Texto>genero</Texto>
          <Texto>preco</Texto>
          <Texto>situacao</Texto>
        </InfoCard>
      </CardBody>
      <CardButton>
        <Button>Comprar</Button>
      </CardButton>
    </CardContainer>
  );
};

Card.propTypes = {
  // bla: PropTypes.string,
};

Card.defaultProps = {
  // bla: 'test',
};

export default Card;
