import styled from 'styled-components';

export const PhotoCard = styled.div`
  grid-column: span 4 / auto;
  /* Test용 */
  height: 35rem;
  background-color: beige;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  border-radius: 0.5rem;
`;
