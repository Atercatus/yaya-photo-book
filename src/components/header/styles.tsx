import styled from 'styled-components';
import {
  HEADLINE_BACKGROUND_COLOR,
  WIDE_DESKTOP_HEADER_HEIGHT,
  WIDE_DESKTOP_COLUMNS,
  WIDE_DESKTOP_MAX_WIDTH,
  NARROW_DESKTOP_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  MOBILE_MAX_WIDTH,
} from '../../common/constant';

export const Header = styled.header`
  grid-column: span ${WIDE_DESKTOP_COLUMNS};
  width: 100%;
  height: ${WIDE_DESKTOP_HEADER_HEIGHT}rem;
  /* border-bottom: 1px solid #f3f3f3; */
  position: sticky;
  top: 0;
  background: ${HEADLINE_BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  max-width: ${WIDE_DESKTOP_MAX_WIDTH}rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(${WIDE_DESKTOP_COLUMNS}, 1fr);
  grid-gap: 2rem;
  font-family: 'Raleway', sans-serif;
`;

export const HeaderContent = styled.div`
  grid-column: span ${WIDE_DESKTOP_COLUMNS};
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

export const Logo = styled.a`
  padding: 0 1rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  font-size: 3.1rem;
  line-height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    font-size: 2.8rem;
  }

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    font-size: 1rem;
  }
`;

export const NavList = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    height: 100%;
    margin: 0;
  }
`;
