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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

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
    position: relative;
    height: 100%;
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    font-weight: bold;
    line-height: 1.5rem;
    letter-spacing: 0.1em;
    display: flex;
    justify-content: center;
    align-items: center;

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

export const RadioBtn = styled.span`
  width: 100%;
  height: 0.4rem;
  position: absolute;
  bottom: 0;
  background-color: black;
`;
