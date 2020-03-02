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
  Sinopse,
  AvaliacoesComponent,
  Avaliacao,
  TopoAvaliacao,
  BotoesCabecalho,
  ButtonLike,
  TextoAvaliacaoComponent
} from "./DetailsBook.styles";
import Button from "../../../../components/Button";
import Titulo from "../../../../components/Title";
import Text from "../../../../components/Text";
import { FaStar } from 'react-icons/fa';

const DetailsBook = props => (
  <Body>
    <Topo>
      <FichaTecnica>
        <ImageComponent>
          <Image src={require("../../../../assets/images/book1.png")} />
        </ImageComponent>
        <DetailsComponent>
          <InfoComponent>
            <Text>Titulo</Text>
            <Text>Autor</Text>
            <Text>Ano</Text>
            <Text>Situacao</Text>
            <Text>Preco</Text>
          </InfoComponent>
          <Button>Adicionar ao Carrinho</Button>
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

DetailsBook.defaultProps = {
  // bla: 'test',
};

export default DetailsBook;
