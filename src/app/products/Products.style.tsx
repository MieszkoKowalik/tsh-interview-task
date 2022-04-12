import styled from 'styled-components';

import { ContentWrapper } from 'app/shared/ContentWrapper';

export const GridTemplate = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

export const StyledHeader = styled.header`
  padding: 52px 24px 32px;
  background-color: #fff;

  @media (min-width: 768px) {
    padding: 48px 24px;
  }
`;

export const StyledContentWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: minmax(auto, 207px) minmax(220px, 392px) auto auto;
  }
`;

export const FiltersWrapper = styled.div`
  grid-column: 1/-1;
  display: flex;
  gap: 32px;

  @media (min-width: 768px) {
    grid-column: unset;
  }
`;

export const StyledMain = styled.main`
  padding: 24px 24px 68px;
  background-color: ${({ theme }) => theme.colors.neutral[100]};

  @media (min-width: 768px) {
    padding: 56px;
    padding-bottom: 56px;
  }
`;

export const UserWrapper = styled.div`
  justify-self: end;

  @media (min-width: 768px) {
    order: 1;
  }
`;
