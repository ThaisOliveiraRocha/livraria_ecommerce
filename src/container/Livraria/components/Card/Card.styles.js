import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 15px;
  flex-direction: column;
  width: 240px;
  height: 325px;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const ImageCard = styled.img`
  width: 100px;
`;

export const InfoCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Button = styled.div`
  text-align: center;
  background-color: #003d99;
  color: white;
  width: 100%;
`;

export const Titulo = styled.span`
  flex-grow: 1;
  font-size: 18px;
  font-weight: 700;
`;

export const Texto = styled.span`
  flex-grow: 1;
  font-size: 14px;
  margin-top: 2px;
`;