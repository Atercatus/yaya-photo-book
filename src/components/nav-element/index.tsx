import * as S from './styles';
import { NavElementProp } from './types/nav-element-prop';

const NavElement = ({ text, selected }: NavElementProp) => (
  <S.NavElement selected={!!selected}>
    <a href="#">{text}</a>
  </S.NavElement>
);

export default NavElement;
