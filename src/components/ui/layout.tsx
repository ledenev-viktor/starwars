import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { Layout as LayoutAntd } from 'antd';
import { COLORS } from '~styles/variables';
import { BREAKPOINTS } from '~styles/breakpoints';

const LayoutBase = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <LayoutAntd
      className={className}
      style={{ minHeight: '100vh', background: 'none' }}
    >
      <div className="inner">{children}</div>
    </LayoutAntd>
  );
};

export const Layout = styled(LayoutBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  & .inner {
    padding: 70px 30px;
    max-width: 980px;
    width: 100%;
    box-sizing: border-box;
    background: ${COLORS.black};
    border-radius: 20px;

    @media screen and (max-width: ${BREAKPOINTS.mobile}) {
      padding: 40px 20px 40px;
    }
  }
`;