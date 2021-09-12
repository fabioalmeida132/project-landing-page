import styled, {css} from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
    text-align: center;
    max-width: 58rem;
  `}
`;

export const Hml = styled.div`
  ${({theme}) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
