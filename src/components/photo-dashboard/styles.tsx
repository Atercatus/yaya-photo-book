import styled from 'styled-components';
import { DESKTOP_COLUMNS, DESKTOP_MAX_WIDTH } from '../../common/constant';

export const Content = styled.div`
  width: ${DESKTOP_MAX_WIDTH}rem;
  display: grid;
  grid-template-columns: repeat(${DESKTOP_COLUMNS}, 1fr);
  grid-gap: 2rem;
  /* margin: 0 13rem 0 13rem; */
  overflow: hidden;
`;
