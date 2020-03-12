import styled from "styled-components";

export const Test = styled.div`
  display: flex;
`;

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) =>
    background ? background : "#003d99"};
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  color: white;
  font-size: 14px;
  font-weight: 600;
  width: ${({ width }) => (width ? width : "170px")};
  padding: 15px;

  border: none;
  border-radius: 3px;
  outline: none;

  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }

  &.margin-right-10{
    margin-right: 10px;
  }

  &.close{
    background-color: red;
    color: #fff;
    border-radius: 50%;
    border: 1px solid white;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 30px;
    height: 30px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
