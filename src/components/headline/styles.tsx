import styled from 'styled-components';
import {
  HEADLINE_BACKGROUND_COLOR,
  WIDE_DESKTOP_HEADLINE_PADDING_TOP,
  WIDE_DESKTOP_HEADLINE_PADDING_BOTTOM,
  WIDE_DESKTOP_COLUMNS,
  WIDE_DESKTOP_MAX_WIDTH,
  NARROW_DESKTOP_MAX_WIDTH,
  PAGE_PADDING,
  NARROW_DESKTOP_HEADLINE_PADDING_TOP,
  NARROW_DESKTOP_HEADLINE_PADDING_BOTTOM,
  TABLET_MAX_WIDTH,
  MOBILE_MAX_WIDTH,
} from '../../common/constant';

export const Headline = styled.div`
  width: 100%;
  background-color: ${HEADLINE_BACKGROUND_COLOR};
  padding: ${WIDE_DESKTOP_HEADLINE_PADDING_TOP}rem ${PAGE_PADDING}rem
    ${WIDE_DESKTOP_HEADLINE_PADDING_BOTTOM}rem ${PAGE_PADDING}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    padding: ${NARROW_DESKTOP_HEADLINE_PADDING_TOP}rem ${PAGE_PADDING}rem
      ${NARROW_DESKTOP_HEADLINE_PADDING_BOTTOM}rem ${PAGE_PADDING}rem;
  }
`;

export const Meta = styled.div`
  width: ${WIDE_DESKTOP_MAX_WIDTH}rem;
  grid-column: span ${WIDE_DESKTOP_COLUMNS};
  /* font-family: 'Poppins', sans-serif; */
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  line-height: 7.5rem;
  margin: 0;
  margin-bottom: 2rem;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    font-size: 4.5rem;
    line-height: 6.8rem;
  }

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    font-size: 4rem;
    line-height: 5.8rem;
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    font-size: 3.7rem;
    line-height: 4.9rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.6rem;
  color: #919191;
  margin: 0;

  @media only screen and (max-width: ${10 * NARROW_DESKTOP_MAX_WIDTH}px) {
    font-size: 1.7rem;
    line-height: 3rem;
  }

  @media only screen and (max-width: ${10 * TABLET_MAX_WIDTH}px) {
    font-size: 1.4rem;
    line-height: 2.7rem;
  }

  @media only screen and (max-width: ${10 * MOBILE_MAX_WIDTH}px) {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
`;

export const HighLight = styled.span`
  color: white;
  /* background-color: #ff6661; */
  background-color: #212121;
  padding: 0 1rem;
  border-radius: 0.5rem;
`;
