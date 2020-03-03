import React from "react";
import PropTypes from "prop-types";
import {
  CardContainer,
  CardBody,
  TopCard,
  ImageCard,
  InfoCard,
  CardButton
} from "./Card.styles";
import Button from '../../../../components/Button';
import Titulo from '../../../../components/Title';
import Text from "../../../../components/Text";

const Card = ({ livro }) => {
  const onClick = event => {
    window.location.href = "/details";
  };

  return (
    <CardContainer>
      <CardBody onClick={onClick}>
        <TopCard>
          <Titulo>{livro.titulo}</Titulo>
          <ImageCard src={require(`../../../../assets/images/${livro.imagem}`)} />
        </TopCard>
        <InfoCard>
          <Text>autor{livro.autor}</Text>
          <Text>ano {livro.ano}</Text>
          <Text>genero {livro.genero}</Text>
          <Text>preco {livro.preco}</Text>
          <Text>situacao {livro.situacao}</Text>
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
