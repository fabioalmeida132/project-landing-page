import P from "prop-types";
import * as S from "./styles";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";
import {SectionBackground} from "../SectionBackground";

export const GridImage = ({title, description, grid, background = false, sectionId = ''}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map( el => (
            <S.GridElement key={el.srcImg}>
              <S.Image src={el.srcImg} alt={el.altText}/>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.node.isRequired,
  description: P.node.isRequired,
  grid: P.arrayOf(P.shape({
    altText: P.node.isRequired,
    srcImg: P.node.isRequired,
  })).isRequired,
  background: P.bool,
  sectionId: P.string
};
