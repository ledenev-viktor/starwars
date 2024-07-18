import { AutoComplete as AutoCompleteAntd, AutoCompleteProps } from 'antd';
import styled from '@emotion/styled';
import { COLORS } from '~styles/variables';
import { FC } from 'react';

interface AutoCompleteBase extends AutoCompleteProps {
  className?: string;
  sizeMode?: 'normal' | 'big';
}

const AutoCompleteBase: FC<AutoCompleteBase> = ({
  className,
  sizeMode = 'normal',
  ...props
}) => {
  return (
    <AutoCompleteAntd
      {...props}
      className={`${className} ${sizeMode}`.trim()}
    />
  );
};

export const AutoComplete = styled(AutoCompleteBase)`
  &.ant-select-outlined:not(.ant-select-customize-input) {
    display: inline-block;
    width: 100%;
    & .ant-select-selector {
      background: ${COLORS.lucentBlack};
      color: ${COLORS.white};
    }
    &.normal {
      height: 35px;
      & .ant-select-selector {
        font-size: 18px;
      }
    }
    &.big {
      height: 60px;
      font-size: 25px;
      & .ant-select-selector {
        font-size: 25px;
      }
      & input {
        font-size: 25px;
      }
    }

    &.ant-select-outlined:not(.ant-select-disabled):not(
        .ant-select-customize-input
      ):not(.ant-pagination-size-changer):hover
      .ant-select-selector {
      border-color: ${COLORS.white};
    }
    &.ant-select-focused:where(
        .css-dev-only-do-not-override-98ntnt
      ).ant-select-outlined:not(.ant-select-disabled):not(
        .ant-select-customize-input
      ):not(.ant-pagination-size-changer)
      .ant-select-selector {
      border-color: ${COLORS.white};
    }

    & input {
      font-size: 18px;
      &:-internal-autofill-selected,
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        transition: background-color 999999s ease-in-out 0s;
        background: none;
      }
      &:-webkit-autofill::first-line {
        font-size: 16px;
        color: ${COLORS.white};
        letter-spacing: 0.05em;
        font-weight: 600;
      }
      &:-webkit-autofill {
        animation: onautofillstart 999999s forwards;
      }
      &:not(:-webkit-autofill) {
        animation: onautofillcancel 999999s;
      }
      &::placeholder {
        color: ${COLORS.lucentWhite};
        transition: color 0.3s ease;
      }
    }
  }
`;
