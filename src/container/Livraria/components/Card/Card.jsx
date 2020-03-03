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
import { Link, withRouter } from "react-router-dom";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";

import { connect } from "react-redux";
import { addEditCarrinho, getDetail } from "../../../../store/actions";

const Card = ({ livro, addItemCarrinho, showDetails }) => {
  return (
    <CardContainer>
      <CardBody onClick={() => showDetails(livro)}>
        <TopCard>
          <Titulo>{livro.titulo}</Titulo>
          <ImageCard
            src={require(`../../../../assets/images/${livro.imagem}`)}
          />
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
  showDetails: (livro) => {dispatch(getDetail(livro)); history.push("/details")}
});

export default withRouter(connect(null, mapDispatchToProps)(Card));
