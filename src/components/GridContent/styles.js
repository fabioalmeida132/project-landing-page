import styled, {css} from "styled-components";

export const Container = styled.div`
  ${({theme}) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const Hml = styled.div`
  ${({theme}) => css`
    margin: ${theme.spacings.xhuge} 0;
  `}
`;
