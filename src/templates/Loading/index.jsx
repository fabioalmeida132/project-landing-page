import P from "prop-types";
import * as S from "./styles";

export const Loading = () => {
  return (
    <S.Container/>
  );
};

Loading.propTypes = {
  children: P.node.isRequired,
};
