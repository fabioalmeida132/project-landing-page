import P from "prop-types";
import * as S from "./styles";
import {Heading} from "../Heading";

export const LogoLink = ({text, srcImg = '', link}) => {
  return (
    <Heading size="small" uppercase>
      <S.Container href={link}>
        {!!srcImg && (<img src={srcImg} alt={text}/>)}
        {!srcImg && text}
      </S.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired
};
