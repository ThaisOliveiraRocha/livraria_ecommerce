import styled from "styled-components";

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  top: 65px;
  width: 300px;
  right: 10px;

  border: 1px solid rgba(11, 107, 230, 0.5);
  box-shadow: 5px 5px 30px rgba(11, 107, 230, 0.3);
  background-color: white;

  height: 170px;
  overflow-y: scroll;

  padding: 10px;
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
