import P from "prop-types";
import * as S from "./styles";
import {TextComponent} from "../TextComponent";
import {SectionContainer} from "../SectionContainer";

export const Footer = ({html}) => {
  return (
    <SectionContainer>
      <S.Container>
        <TextComponent>{html}</TextComponent>
      </S.Container>
    </SectionContainer>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
