import styled from "styled-components";

export const TextComponent = styled.span`
  font-size: 14px;
  font-weight:  ${({ bold }) => (bold ? bold : "400")};;
  color: ${({ color }) => (color ? color : "black")};
`;
