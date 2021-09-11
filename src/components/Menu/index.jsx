import P from "prop-types";
import * as S from "./styles";
import {SectionContainer} from "../SectionContainer";
import {LogoLink} from "../LogoLink";
import {NavLinks} from "../NavLinks";
import {Menu as MenuIcon} from '@styled-icons/material-outlined/Menu'
import {Close as CloseIcon} from '@styled-icons/material-outlined/Close'
import {useState} from "react";

export const Menu = ({links = [],logoData}) => {

  const [visible, setVisible] = useState(false);

  return (
    <>
      <S.Button visible={visible} onClick={() => setVisible(true)} aria-label="Open/Close menu">
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </S.Button>
      <S.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer >
          <S.MenuContainer>
            <LogoLink {...logoData}/>
            <NavLinks links={links}/>
          </S.MenuContainer>
        </SectionContainer>
      </S.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired
};
