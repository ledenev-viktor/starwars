import { Input as InputAntd, InputProps } from 'antd';
import styled from '@emotion/styled';
import { COLORS } from '~styles/variables';
import { FC } from 'react';
import { BREAKPOINTS } from '~styles/breakpoints';

interface InputBaseProps extends InputProps {
  className?: string;
  sizeMode?: 'big' | 'normal';
}

const InputBase: FC<InputBaseProps> = ({
  className,
  sizeMode = 'normal',
  ...props
}) => {
  return <InputAntd {...props} className={`${className} ${sizeMode}`.trim()} />;
};

export const Input = styled(InputBase)`
  & {
    width: 100%;
    background: ${COLORS.lucentBlack};
    color: ${COLORS.white};

    &[type=color] {
      padding: 0;
      border: none;
      cursor: pointer;
    }

    &.normal {
      height: 35px;
      font-size: 18px;
    }

    &.big {
      height: 60px;
      font-size: 25px;

      @media screen and (max-width: ${BREAKPOINTS.mobile}) {
        font-size: 18px;
      }
    }

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
    &.ant-input-outlined {
      border-color: ${COLORS.white};
      &:focus,
      &:focus-within,
      &:hover {
        background: ${COLORS.lucentBlack};
        &::placeholder {
          color: ${COLORS.white};
        }
      }
    }
  }
`;
