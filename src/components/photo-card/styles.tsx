import styled from 'styled-components';
import {
  NARROW_DESKTOP_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  MOBILE_MAX_WIDTH,
} from '../../common/constant';

export const PhotoCard = styled.div`
  grid-column: span 4 / auto;
  /* Test용 */
  height: 35rem;
  background-color: beige;

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    grid-column: span 3 / auto;
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    grid-column: span 4 / auto;
  }
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.5rem;
`;
