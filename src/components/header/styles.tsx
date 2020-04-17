import styled from 'styled-components';
import {
  HEADLINE_BACKGROUND_COLOR,
  DESKTOP_HEADER_HEIGHT,
  DESKTOP_COLUMNS,
  DESKTOP_MAX_WIDTH,
} from '../../common/constant';

export const Header = styled.nav`
  width: 100%;
  height: ${DESKTOP_HEADER_HEIGHT}rem;
  /* border-bottom: 1px solid #f3f3f3; */
  position: sticky;
  top: 0;
  background: ${HEADLINE_BACKGROUND_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  width: ${DESKTOP_MAX_WIDTH}rem;
  display: grid;
  grid-template-columns: repeat(${DESKTOP_COLUMNS}, 1fr);
  grid-gap: 2rem;
  font-family: 'Raleway', sans-serif;
  margin: 0 13rem;
`;

export const HeaderContent = styled.div`
  grid-column: span ${DESKTOP_COLUMNS};
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.a`
  font-weight: 500;
  letter-spacing: 0.16em;
  font-size: 3.1rem;
  line-height: 3.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
