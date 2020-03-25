import styled from "styled-components";

export const TextComponent = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ color }) => (color ? color : "black")};
`;
