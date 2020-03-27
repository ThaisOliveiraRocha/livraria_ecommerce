import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  margin: 15px;
  flex-direction: column;
  width: 300px;
  height: 310px;

  background-color: white;
  border-radius: 5px;
  border: 1px solid #79bac1;
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  cursor: pointer;
`;

export const TopCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
`;

export const TopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ImageCard = styled.img`
  width: auto;
  height: 160px;
  display: flex;
  align-self: flex-start;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;