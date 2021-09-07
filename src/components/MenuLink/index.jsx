import P from "prop-types";
import * as S from "./styles";

export const MenuLink = ({children, link, newTab = false}) => {
  const target = newTab ? '_blank' : '_self'
  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool
};
