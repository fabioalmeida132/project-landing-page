import P from "prop-types";
import * as S from "./styles";

export const TextComponent = ({children}) => {
  return (
    <S.Container>
      {children}
    </S.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
