import P from "prop-types";
import * as S from "./styles";
import {SectionBackground} from "../SectionBackground";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";

export const GridContent = ({title, html, background = false}) => {
  return (
    <SectionBackground background={background}>
      <S.Container>
        <Heading uppercase colorDark={!background} as="h2">{title}</Heading>
        <S.Hml>
          <TextComponent>{html}</TextComponent>
        </S.Hml>
      </S.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
