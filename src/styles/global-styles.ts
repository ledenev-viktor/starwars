import { css } from '@emotion/react';
import { COLORS } from './variables';

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    overflow: hidden auto;
    min-height: 100vh;
    min-width: 320px;
  }

  .ant-select-dropdown {
    background: ${COLORS.black};
    border: 1px solid ${COLORS.white};

    .ant-select-item.ant-select-item-option {
      color: ${COLORS.lucentWhite};
    }
    .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
      color: ${COLORS.white};
      background-color: none;
    }
  }
`;
