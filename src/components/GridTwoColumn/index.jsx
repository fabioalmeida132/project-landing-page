import P from "prop-types";
import * as S from "./styles";
import {SectionBackground} from "../SectionBackground";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";

export const GridTwoColumn = ({title, text, srcImg, background = false, sectionId = ''}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container background={background}>
        <S.TextContainer >
          <Heading uppercase colorDark={!background} as="h2">{title}</Heading>
          <TextComponent>{text}</TextComponent>
        </S.TextContainer>
        <S.ImageContainer>
          <S.Image src={srcImg}/>
        </S.ImageContainer>
      </S.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string
};
