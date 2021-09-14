import styled, {css} from "styled-components";

export const Container = styled.a`
  ${({theme}) => css`
      position: fixed;
      background: ${theme.colors.primaryColor};
      display: flex;
      width: 4rem;
      height: 4rem;
      align-items: center;
      justify-content: center;
      bottom: 2rem;
      right: 2rem;
      z-index: 6;
      color: ${theme.colors.white};
  `}
`;
