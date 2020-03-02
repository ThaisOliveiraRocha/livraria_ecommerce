import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  width: 100%;
`;

export const Topo = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const FichaTecnica = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  width: 40%;
  padding: 20px;
  
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

export const DetailsComponent = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 10px;
`;

export const ImageComponent = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
`;

export const InfoComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ButtonCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  background-color: #003d99;
`;

export const Sinopse = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
  width: 40%;
  padding: 20px;
  
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

export const Texto = styled.span`
  font-size: 14px;
`;

export const AvaliacoesComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  flex-direction: column;

  margin: 0 90px;
  padding: 20px;
  
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  
  border: 1px solid rgba(0, 0, 0, 0.125);
`;

export const TopoAvaliacao = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const ItemCabecalho = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const BotoesCabecalho = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 70px;
`;

export const ButtonLike = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }
`;

export const TextoAvaliacaoComponent = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

export const NovoComentario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 30px;
  background-color: #003d99;
`;