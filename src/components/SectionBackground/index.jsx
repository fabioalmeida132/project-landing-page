import P from "prop-types";
import * as S from "./styles";
import {SectionContainer} from "../SectionContainer";

export const SectionBackground = ({children, background = false}) => {
  return (
    <S.Container background={background}>
      <SectionContainer>
        {children}
      </SectionContainer>
    </S.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool
};
