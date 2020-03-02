import styled from "styled-components";

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 20%;
  height: 150px;

  overflow-y: scroll; 
`;

export const Table = styled.table`
  font-size: 16px;
  font-weight: 600;
`;

export const Titulo = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const Tr = styled.tr`
  /* display: flex;
  align-items: center;
  width: 100%; */
`;

export const Td = styled.td`
    width: 70px;
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

export const Input = styled.input`
  font-size: 14px;
  width: 50px;
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

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;