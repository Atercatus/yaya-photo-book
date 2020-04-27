import styled from 'styled-components';
import { NavElementStyleProps } from './types/nav-element-props';

export const NavElement = styled.li<NavElementStyleProps>`
  list-style-type: none;
  width: 10rem;

  a {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: 0.1em;
    border-bottom: ${(props) => (props.selected ? '3px solid black' : 'none')};
    padding: 0.7rem 0;
  }
`;
