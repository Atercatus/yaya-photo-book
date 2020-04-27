import styled from 'styled-components';
import { NavElementStyleProps } from './types/nav-element-props';
import {
  NARROW_DESKTOP_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  MOBILE_MAX_WIDTH,
} from '../../common/constant';

export const NavElement = styled.li<NavElementStyleProps>`
  list-style-type: none;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    width: 8rem;
  }

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    width: 7rem;
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    width: 6rem;
  }

  a {
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: 0.1em;
    border-bottom: ${(props) => (props.selected ? '3px solid black' : 'none')};
    padding: 0.7rem 0;

    @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
      font-size: 1.15rem;
      font-weight: 600;
    }

    @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
      font-size: 1rem;
    }

    @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
      font-size: 1rem;
    }
  }
`;
