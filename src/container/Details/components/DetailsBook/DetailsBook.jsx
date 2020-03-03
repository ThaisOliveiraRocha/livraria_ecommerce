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
  LinhaInfo,
  LinhaButton,
  Sinopse,
  AvaliacoesComponent,
  Avaliacao,
  TopoAvaliacao,
  BotoesCabecalho,
  ButtonLike,
  TextoAvaliacaoComponent
} from "./DetailsBook.styles";
import { connect } from "react-redux";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";
import { FaStar } from "react-icons/fa";
import { addEditCarrinho } from "../../../../store/actions";

const DetailsBook = ({ livro, addItemCarrinho }) => (
  <Body>
    <Topo>
      <FichaTecnica>
        <ImageComponent>
          <Image src={require(`../../../../assets/images/${livro.imagem}`)} />
        </ImageComponent>
        <DetailsComponent>
          <InfoComponent>
            <LinhaInfo>
              <Titulo>Título</Titulo>
              <Text>{livro.titulo}</Text>
            </LinhaInfo>
            <LinhaInfo>
              <Titulo>Autor</Titulo>
              <Text>{livro.autor}</Text>
            </LinhaInfo>
            <LinhaInfo>
              <Titulo>Ano</Titulo>
              <Text>{livro.ano}</Text>
            </LinhaInfo>
            <LinhaInfo>
              <Titulo>Situação</Titulo>
              <Text>{livro.situacao}</Text>
            </LinhaInfo>
            <LinhaInfo>
              <Titulo>Preço</Titulo>
              <Text>R$ {livro.preco}</Text>
            </LinhaInfo>
            <LinhaButton>
              <Button onClick={() => addItemCarrinho(livro)}>Adicionar ao Carrinho</Button>
            </LinhaButton>
          </InfoComponent>
        </DetailsComponent>
      </FichaTecnica>
      <Sinopse>
        <Titulo>Sinopse</Titulo>
        <Text>texto sinopse</Text>
      </Sinopse>
    </Topo>
    <AvaliacoesComponent>
      <Titulo>Avaliações</Titulo>
      <Avaliacao>
        <TopoAvaliacao>
          <Text>Nome user</Text>
          <Text>
            <FaStar className="yellow"></FaStar>
            <FaStar className="yellow"></FaStar>
            <FaStar className="yellow"></FaStar>
            <FaStar className="yellow"></FaStar>
            <FaStar className="yellow"></FaStar>
          </Text>
          <Text>data</Text>
          <BotoesCabecalho>
            <ButtonLike src={require("../../../../assets/images/like.svg")} />
            <ButtonLike src={require("../../../../assets/images/finger.svg")} />
          </BotoesCabecalho>
        </TopoAvaliacao>
        <TextoAvaliacaoComponent>
          <Text>Texto avaliação</Text>
        </TextoAvaliacaoComponent>
      </Avaliacao>
      <Button>Adicionar Comentário</Button>
    </AvaliacoesComponent>
  </Body>
);

DetailsBook.propTypes = {
  // bla: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  addItemCarrinho: livro => dispatch(addEditCarrinho(livro)),
});

export default connect(null, mapDispatchToProps)(DetailsBook);
