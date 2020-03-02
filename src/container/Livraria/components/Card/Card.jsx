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

const Card = ({ props }) => {
  const onClick = event => {
    window.location.href = "/details";
  };

  return (
    <CardContainer>
      <CardBody onClick={onClick}>
        <TopCard>
          <Titulo>Titulo</Titulo>
          <ImageCard src={require("../../../../assets/images/book1.png")} />
        </TopCard>
        <InfoCard>
          <Text>autor</Text>
          <Text>ano</Text>
          <Text>genero</Text>
          <Text>preco</Text>
          <Text>situacao</Text>
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
