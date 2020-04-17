import * as S from './styles';
import NavElement from '../nav-element';

export const Header = () => (
  <S.Header>
    <S.GridContainer>
      <S.HeaderContent>
        <S.Logo href="#">MODERN</S.Logo>
        <S.NavList>
          <NavElement text="HOME" selected />
          <NavElement text="ALBUM" />
          <NavElement text="ABOUT" />
          <NavElement text="CONTACT" />
        </S.NavList>
      </S.HeaderContent>
    </S.GridContainer>
  </S.Header>
);
