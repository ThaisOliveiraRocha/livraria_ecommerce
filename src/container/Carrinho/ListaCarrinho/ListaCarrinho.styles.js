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

export const ButtonContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;    
    justify-content: flex-end;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
`;

export const ButtonFinalizar = styled.div`
    width: 100px;
    height: 30px;
    margin: 10px;

    background-color: #00BA08;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonCancelar = styled.div`
    width: 100px;
    height: 30px;
    margin: 10px 0 10px 10px;

    background-color: #CA1900;

    display: flex;
    align-items: center;
    justify-content: center;
`;
