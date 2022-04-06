import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  gap: 24px;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;
