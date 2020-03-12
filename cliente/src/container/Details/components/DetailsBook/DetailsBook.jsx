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
  TextoAvaliacaoComponent,
  LivroComponent,
  SinopseTitulo,
  SinopseCorpo
} from "./DetailsBook.styles";
import { connect } from "react-redux";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";
import { FaStar } from "react-icons/fa";
import { addEditCarrinho } from "../../../../store/actions";
import { withRouter } from "react-router-dom";

export const DetailsBook = ({ livro, addItemCarrinho }) => (
  <Body>
    <Topo>
      <FichaTecnica>
        <LivroComponent>
          <ImageComponent>
            <Image src={require(`../../../../assets/images/${livro.imagem}`)} alt=""/>
          </ImageComponent>
          <DetailsComponent>
            <InfoComponent>
              <LinhaInfo>
                <Titulo>Título</Titulo>
              </LinhaInfo>
              <LinhaInfo>
                <Titulo>Autor</Titulo>
              </LinhaInfo>
              <LinhaInfo>
                <Titulo>Ano</Titulo>
              </LinhaInfo>
              <LinhaInfo>
                <Titulo>Situação</Titulo>
              </LinhaInfo>
              <LinhaInfo>
                <Titulo>Preço</Titulo>
              </LinhaInfo>
            </InfoComponent>
            <InfoComponent>
              <LinhaInfo>
                <Text>{livro.titulo}</Text>
              </LinhaInfo>
              <LinhaInfo>
                <Text>{livro.autor}</Text>
              </LinhaInfo>
              <LinhaInfo>
                <Text>{livro.ano}</Text>
              </LinhaInfo>
              <LinhaInfo>
                <Text>{livro.situacao}</Text>
              </LinhaInfo>
              <LinhaInfo>
                <Text>{livro.preco}</Text>
              </LinhaInfo>
            </InfoComponent>
          </DetailsComponent>
        </LivroComponent>
        <LinhaButton>
          <Button className="btnAdicionarCarrinho" onClick={() => addItemCarrinho(livro)}>
            Adicionar ao Carrinho
          </Button>
        </LinhaButton>
      </FichaTecnica>
      <Sinopse>
        <SinopseTitulo>
          <Titulo>Sinopse</Titulo>
        </SinopseTitulo>
        <SinopseCorpo>
          <Text>texto sinopse</Text>
        </SinopseCorpo>
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

const mapDispatchToProps = dispatch => ({
  addItemCarrinho: livro => dispatch(addEditCarrinho(livro))
});

export default withRouter(connect(null, mapDispatchToProps)(DetailsBook));
