import P from "prop-types";
import * as S from "./styles";
import {TextComponent} from "../TextComponent";
import {SectionContainer} from "../SectionContainer";

export const Footer = ({html}) => {
  return (

      <S.Container>
        <SectionContainer>
          <TextComponent>{html}</TextComponent>
        </SectionContainer>
      </S.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
