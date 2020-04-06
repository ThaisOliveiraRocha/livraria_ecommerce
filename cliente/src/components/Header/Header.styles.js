import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  padding: 20px 25px 20px 25px;
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
  background-color: red;
  font-size: 12px;
  width: 15px;
  height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 8px;
  left: 45px;
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

export const CartContainer = styled.div`
  width: 25%;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

export const UserComponent = styled.div`
  width: 25%;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const ButtonsComponent = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
