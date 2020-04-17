import styled from 'styled-components';
import { DESKTOP_COLUMNS } from '../../common/constant';

export const Subhead = styled.h4`
  grid-column: span ${DESKTOP_COLUMNS};
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15.6rem 0 6rem 0;
`;
