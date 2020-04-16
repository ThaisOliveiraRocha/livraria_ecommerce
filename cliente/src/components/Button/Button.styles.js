import styled from "styled-components";

export const Test = styled.div`
  display: flex;
`;

export const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ background }) =>
    background ? background : "#2a7886"};
  color: ${({ color }) => (color ? color : "white")};
  font-size: 14px;
  width: ${({ width }) => (width ? width : "150px")};
  padding: 10px;
  margin: 5px;

  border: none;
  border-radius: 3px;
  outline: none;

  &:hover {
    color: #fe416d;
  }

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
