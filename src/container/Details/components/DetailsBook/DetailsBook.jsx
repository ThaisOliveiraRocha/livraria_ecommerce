import React from "react";
import PropTypes from "prop-types";
import {
  Body,
  Topo,
  FichaTecnica,
  DetailsComponent,
  ImageComponent,
  Image,
  InfoComponent,
  ButtonCarrinho,
  Titulo,
  Button,
  Sinopse,
  Texto,
  AvaliacoesComponent,
  Avaliacao,
  TopoAvaliacao,
  ItemCabecalho,
  BotoesCabecalho,
  ButtonLike,
  TextoAvaliacaoComponent,
  NovoComentario
} from "./DetailsBook.styles";

const DetailsBook = props => (
  <Body>
    <Topo>
      <FichaTecnica>
        <ImageComponent>
          <Image src={require("../../../../assets/images/book1.png")} />
        </ImageComponent>
        <DetailsComponent>
          <InfoComponent>
            <Titulo>Titulo</Titulo>
            <Titulo>Autor</Titulo>
            <Titulo>Ano</Titulo>
            <Titulo>Situacao</Titulo>
            <Titulo>Preco</Titulo>
          </InfoComponent>
          <ButtonCarrinho>
            <Button>Adicionar ao Carrinho</Button>
          </ButtonCarrinho>
        </DetailsComponent>
      </FichaTecnica>
      <Sinopse>
        <Titulo>Sinopse</Titulo>
        <Texto>texto sinopse</Texto>
      </Sinopse>
    </Topo>
    <AvaliacoesComponent>
      <Titulo>Avaliações</Titulo>
      <Avaliacao>
        <TopoAvaliacao>
          <ItemCabecalho>Nome user</ItemCabecalho>
          <ItemCabecalho>Estrelas</ItemCabecalho>
          <ItemCabecalho>data</ItemCabecalho>
          <BotoesCabecalho>
            <ButtonLike src={require("../../../../assets/images/like.svg")} />
            <ButtonLike src={require("../../../../assets/images/finger.svg")} />
          </BotoesCabecalho>
        </TopoAvaliacao>
        <TextoAvaliacaoComponent>
          <Texto>Texto avaliação</Texto>
        </TextoAvaliacaoComponent>
      </Avaliacao>
      <NovoComentario>
        <Button>Adicionar Comentário</Button>
      </NovoComentario>
    </AvaliacoesComponent>
  </Body>
);

DetailsBook.propTypes = {
  // bla: PropTypes.string,
};

DetailsBook.defaultProps = {
  // bla: 'test',
};

export default DetailsBook;
