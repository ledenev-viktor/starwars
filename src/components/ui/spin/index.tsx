import { Spin as SpinAnt } from 'antd';
import styled from '@emotion/styled';
import { COLORS } from '../../../styles/variables';

type SpinProps = {
  template?: 'light' | 'dark';
  className?: string;
};
const SpinBase = ({ template, className, ...otherProps }: SpinProps) => {
  return (
    <SpinAnt
      {...otherProps}
      className={`${className} ${template == 'dark' ? 'dark' : 'light'}`}
    />
  );
};

export const Spin = styled(SpinBase)`
  &.dark {
    .ant-spin-dot-item {
      background-color: ${COLORS.black};
    }
  }
  &.light {
    .ant-spin-dot-item {
      background-color: ${COLORS.white};
    }
  }
`;
