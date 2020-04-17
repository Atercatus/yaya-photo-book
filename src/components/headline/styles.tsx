import styled from 'styled-components';
import {
  HEADLINE_BACKGROUND_COLOR,
  DESKTOP_HEADLINE_PADDING_TOP,
  DESKTOP_HEADLINE_PADDING_BOTTOM,
  DESKTOP_COLUMNS,
  DESKTOP_MAX_WIDTH,
} from '../../common/constant';

export const Headline = styled.div`
  width: 100%;
  background-color: ${HEADLINE_BACKGROUND_COLOR};
  padding: ${DESKTOP_HEADLINE_PADDING_TOP}rem 0
    ${DESKTOP_HEADLINE_PADDING_BOTTOM}rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Meta = styled.div`
  width: ${DESKTOP_MAX_WIDTH}rem;
  grid-column: span ${DESKTOP_COLUMNS};
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
`;

export const SubTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3.6rem;
  color: #919191;
  margin: 0;
`;

export const HighLight = styled.span`
  color: white;
  /* background-color: #ff6661; */
  background-color: #212121;
  padding: 0 1rem;
  border-radius: 0.5rem;
`;
