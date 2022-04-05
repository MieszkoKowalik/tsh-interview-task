import styled from 'styled-components';

import { ContentWrapper } from 'app/shared/ContentWrapper';
import { SecondaryButton } from 'app/shared/SecondaryButton';

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

  ${SecondaryButton} {
    justify-self: end;

    @media (min-width: 768px) {
      order: 1;
    }
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
