import * as S from './styles';
import { NavElementProps } from './types/nav-element-props';

const NavElement = ({ text, selected }: NavElementProps) => (
  <S.NavElement selected={!!selected}>
    <a href="#">
      {text}
      {selected && <S.RadioBtn />}
    </a>
  </S.NavElement>
);

export default NavElement;
