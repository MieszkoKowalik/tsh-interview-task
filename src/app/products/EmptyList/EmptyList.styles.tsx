import styled from 'styled-components';

import { ReactComponent as EmptyListIcon } from 'assets/icons/icon-task_list_plain.svg';

export const EmptyListWrapper = styled.div`
  margin: 0 auto;
  height: 344px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  display: grid;
  align-content: center;
  justify-items: center;

  h2 {
    margin-bottom: 8px;
    font-size: ${({ theme }) => theme.fontSize.m};
    line-height: 16px;
    color: ${({ theme }) => theme.colors.neutral[900]};
  }

  p {
    color: ${({ theme }) => theme.colors.neutral[700]};
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export const StyledEmptyListIcon = styled(EmptyListIcon)`
  width: 36px;
  height: 46px;
  margin-bottom: 22px;
`;
