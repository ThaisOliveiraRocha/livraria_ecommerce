import styled, { keyframes } from "styled-components";

const fade = keyframes`
  from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-sizing: content-box;
  position: absolute;
  top: 60px;
  right: 10px;

  width: 300px;
  max-height: 400px;
  min-height: 60px;
  z-index: 10;
  padding: 10px;
  border: 1px solid #79bac1;
  box-shadow: 5px 5px 30px rgba(121, 186, 193, 0.5);
  background-color: white;

  animation: ${fade} 250ms;
  animation-fill-mode: backwards;
`;

export const ModalComponent = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

export const TituloContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  height: 30px;
  width: 100%;
`;

export const Table = styled.table`
  font-size: 16px;
  font-weight: 600;
  border-collapse: collapse;
  margin-top: 15px;
  thead{
    border-bottom: 1px solid gray;
  }
`;

export const Td = styled.td`
  width: 70px;
  font-weight: normal;
`;

export const Th = styled.th`
  width: 70px;
  font-weight: normal;
`;

export const TdFooter = styled.td`
  display: flex;
  flex-grow: 1;
  font-weight: normal;
`;

export const ImageBook = styled.img`
  width: 40px;
  height: auto;

  margin: 10px;
`;

export const InfoBook = styled.span`
  font-size: 14px;
  margin-right: 5px;
`;

export const ImageTrash = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;

  &:active {
    transform: scale(0.9, 0.9);
  }
`;

export const TotalContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Overlay = styled.div`
  position: fixed;
  /* display: none; */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`;

export const Linha = styled.div`
  border-top: 1px solid rgba(11, 107, 230, 0.5);
`;
