import * as S from './styles';
import NavElement from '../nav-element';
import { useHeader } from './hooks/use-header';

export const Header = () => {
  useHeader();

  return (
    <S.Header>
      <S.GridContainer>
        <S.HeaderContent>
          <S.Logo href="#">MODERN</S.Logo>
          <S.NavList>
            <ul>
              <NavElement text="HOME" selected />
              <NavElement text="ALBUM" />
              <NavElement text="ABOUT" />
              <NavElement text="CONTACT" />
            </ul>
          </S.NavList>
        </S.HeaderContent>
      </S.GridContainer>
    </S.Header>
  );
};
