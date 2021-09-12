import P from "prop-types";
import * as S from "./styles";

export const TextComponent = ({children}) => {
  return (
    <S.Container  dangerouslySetInnerHTML={{ __html: children }}/>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
