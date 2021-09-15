import P from "prop-types";
import * as S from "./styles";
import {TextComponent} from "../TextComponent";
import {SectionContainer} from "../SectionContainer";

export const Footer = ({footerHtml}) => {
  return (

      <S.Container>
        <SectionContainer>
          <TextComponent>{footerHtml}</TextComponent>
        </SectionContainer>
      </S.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
