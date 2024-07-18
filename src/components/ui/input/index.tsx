import { Input as InputAntd } from 'antd';
import styled from '@emotion/styled';
import { COLORS } from '~styles/variables';

export const Input = styled(InputAntd)`
  & {
    width: 100%;
    height: 60px;
    font-size: 25px;
    background: ${COLORS.lucentBlack};
    color: ${COLORS.white};
    
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
      transition: color .3s ease;
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
