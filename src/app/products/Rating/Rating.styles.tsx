import styled from 'styled-components';

import { ReactComponent as FullStarIcon } from 'assets/icons/icon-star_full.svg';
import { ReactComponent as BorderStarIcon } from 'assets/icons/icon-star_border.svg';

export const StyledFullStarIcon = styled(FullStarIcon)`
  fill: ${({ theme }) => theme.colors.secondary};
  width: 16px;
  height: 16px;
`;

export const StyledBorderStarIcon = styled(BorderStarIcon)`
  fill: ${({ theme }) => theme.colors.neutral[500]};
  width: 16px;
  height: 16px;
`;

export const Wrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  gap: 8px;
`;
