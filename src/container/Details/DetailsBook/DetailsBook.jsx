import React from "react";
import PropTypes from "prop-types";
import {
  Body,
  Topo,
  ImageComponent,
  Image,
  InfoComponent,
  ButtonCarrinho
} from "./DetailsBook.styles";

const DetailsBook = props => (
  <Body>
    <Topo>
      <ImageComponent>
        <Image src={require("../../../assets/images/book1.png")} />
      </ImageComponent>
      <InfoComponent>
        <span>Titulo</span>
        <span>Autor</span>
        <span>Ano</span>
        <span>Situacao</span>
        <span>Preco</span>
      </InfoComponent>
      <ButtonCarrinho>
        <span>Adicionar ao Carrinho</span>
      </ButtonCarrinho>
    </Topo>
    <div>
      <div>SINOPSE</div>
    </div>
    <div>Avaliações</div>
  </Body>
);

DetailsBook.propTypes = {
  // bla: PropTypes.string,
};

DetailsBook.defaultProps = {
  // bla: 'test',
};

export default DetailsBook;
