import styled from "styled-components";

export const BodyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TableCart = styled.table`
  width: 60%;
  border-collapse: collapse;
  margin-top: 100px;
`;

export const TituloTopo = styled.tr`
    
`;

export const Cabecalho = styled.th`
  height: 50px;
  border: 1px solid #dddddd;
`;

export const Item = styled.td`
  height: 50px;
  text-align: center;
  border: 1px solid #dddddd;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 50px;
`;

export const ButtonContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;    
    justify-content: flex-end;
`;

export const Texto = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: black;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 60%;
  margin: 10px 0;
`;

export const ImageTrash = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;

  &:active {
    transform: scale(0.9, 0.9);
  }
`;