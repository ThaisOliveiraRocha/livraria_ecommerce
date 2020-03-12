import styled from 'styled-components';

export const TextComponent = styled.span`
    font-size: 14px;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    color: ${({ color }) => (color ? color : "black")};
`;
