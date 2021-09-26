import P from "prop-types";
import * as S from "./styles";
import {SectionContainer} from "../SectionContainer";

const random = () => `id-${Math.random() * 1000}`.replace(/[^a-z0-9-_]/gi,'-');

export const SectionBackground = ({children, background = false, sectionId = ''}) => {


  const id = sectionId ? sectionId : random();
  return (
    <S.Container background={background} id={id}>
      <SectionContainer>
        {children}
      </SectionContainer>
    </S.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string
};
