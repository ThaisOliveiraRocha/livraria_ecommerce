import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 20px 25px 20px 40px;
  justify-content: center;
  align-items: center;
  background-color: #2a7886;
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Image = styled.img`
  width: 40px;
  height: auto;
  margin-right: 5px;
`;

export const CartImage = styled.div`
  width: 30px;
  height: auto;
`;

export const QuantidadeItens = styled.span`
  border-radius: 50%;
  background-color: #fe416d;
  font-size: 12px;
  width: 16px;
  height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 10px;
  right: 115px;
`;

export const CartButtonComponent = styled.span`
  display: flex;
  align-items: center;
`;

export const HomeComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  flex-grow: 1;
`;

export const ButtonsComponent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
