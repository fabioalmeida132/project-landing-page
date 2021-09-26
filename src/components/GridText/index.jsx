import P from "prop-types";
import * as S from "./styles";
import {SectionBackground} from "../SectionBackground";
import {Heading} from "../Heading";
import {TextComponent} from "../TextComponent";

export const GridText = ({title, description, grid, background = false, sectionId = ''}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <S.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">{title}</Heading>
        <TextComponent>{description}</TextComponent>
        <S.Grid>
          {grid.map( el => (
            <S.GridElement key={el.title}>
              <Heading size="medium" colorDark={!background} as="h3">{el.title}</Heading>
              <TextComponent>{el.description}</TextComponent>
            </S.GridElement>
          ))}
        </S.Grid>
      </S.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.node.isRequired,
  description: P.node.isRequired,
  grid: P.arrayOf(P.shape({
    title: P.node.isRequired,
    description: P.node.isRequired,
  })).isRequired,
  background: P.bool,
  sectionId: P.string
};
