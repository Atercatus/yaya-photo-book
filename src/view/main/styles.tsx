import styled from 'styled-components';
import {
  WIDE_DESKTOP_COLUMNS,
  WIDE_DESKTOP_CONTENT_PADDING_TOP,
  PAGE_PADDING,
  NARROW_DESKTOP_MAX_WIDTH,
  NARROW_DESKTOP_CONTENT_PADDING_TOP,
  TABLET_MAX_WIDTH,
  TABLET_CONTENT_PADDING_TOP,
  MOBILE_MAX_WIDTH,
  MOBILE_CONTENT_PADDING_TOP,
} from '../../common/constant';

export const Subhead = styled.h4`
  grid-column: span ${WIDE_DESKTOP_COLUMNS};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  letter-spacing: 0.2em;
  color: #91999b;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${WIDE_DESKTOP_CONTENT_PADDING_TOP}rem ${PAGE_PADDING}rem 6rem
    ${PAGE_PADDING}rem;
  box-sizing: border-box;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    padding-top: ${NARROW_DESKTOP_CONTENT_PADDING_TOP}rem;
  }

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    padding-top: ${TABLET_CONTENT_PADDING_TOP}rem;
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    padding-top: ${MOBILE_CONTENT_PADDING_TOP}rem;
  }
`;
