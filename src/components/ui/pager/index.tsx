import styled from '@emotion/styled';
import { Pagination as PaginationAntd } from 'antd';
import { COLORS } from '../../../styles/variables';

export const Pagination = styled(PaginationAntd)`
  & .ant-pagination-item a {
    color: ${COLORS.white};
  }
  & .ant-pagination-item {
    background: ${COLORS.lucentBlack};
    &:hover {
      border-color: ${COLORS.white};
      &.ant-pagination-item-active {
        & a {
          color: ${COLORS.white};
        }
      }
    }
    &.ant-pagination-item-active {
      border-color: ${COLORS.white};
    }
  }
  & .ant-pagination-jump-next .ant-pagination-item-container,
  & .ant-pagination-jump-prev .ant-pagination-item-container {
    .ant-pagination-item-ellipsis {
      color: ${COLORS.white};
    }
    .ant-pagination-item-link-icon {
      color: ${COLORS.white};
    }
  }

  & .ant-pagination-prev .ant-pagination-item-link,
  & .ant-pagination-next .ant-pagination-item-link {
    color: ${COLORS.white};
    background: ${COLORS.lucentBlack};
    &:hover {
      border-color: ${COLORS.white};
    }
  }
  & .ant-pagination-disabled .ant-pagination-item-link,
  & .ant-pagination-disabled:hover .ant-pagination-item-link {
    color: ${COLORS.lucentWhite};
    background: ${COLORS.lucentBlack};
    &:hover {
      background: ${COLORS.lucentBlack};
      border-color: transparent;
    }
  }
`;
