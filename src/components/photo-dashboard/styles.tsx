import styled from 'styled-components';
import {
  WIDE_DESKTOP_COLUMNS,
  WIDE_DESKTOP_MAX_WIDTH,
  NARROW_DESKTOP_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  MOBILE_MAX_WIDTH,
  NARROW_DESKTOP_COLUMNS,
  TABLET_COLUMNS,
  MOBILE_COLUMNS,
} from '../../common/constant';

export const Content = styled.div`
  max-width: ${WIDE_DESKTOP_MAX_WIDTH}rem;
  display: grid;
  grid-template-columns: repeat(${WIDE_DESKTOP_COLUMNS}, 1fr);
  grid-gap: 2rem;
  /* margin: 0 13rem 0 13rem; */
  overflow: hidden;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    grid-template-columns: repeat(${NARROW_DESKTOP_COLUMNS}, 1fr);
  }

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    grid-template-columns: repeat(${TABLET_COLUMNS}, 1fr);
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    grid-template-columns: repeat(${MOBILE_COLUMNS}, 1fr);
  }
`;
