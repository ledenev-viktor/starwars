import { Link } from 'react-router-dom';
import { Card as CardAntd } from 'antd';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '~styles/variables';
import { BREAKPOINTS } from '~styles/breakpoints';

type CardProps = {
  className?: string;
  href?: string;
  children: ReactNode;
};

const CardBase: FC<CardProps> = ({ className, href, children }) => {
  return (
    <CardAntd className={className}>
      {
        <>
          <span className="link-text">{children}</span>
          {href && <Link className="link" to={href}></Link>}
        </>
      }
    </CardAntd>
  );
};

export const Card = styled(CardBase)`
  position: relative;
  background: ${COLORS.lucentBlack};

  & .ant-card-body {
    padding: 20px 10px;
    line-height: 1;
    @media screen and (max-width: ${BREAKPOINTS.mobile}){
      padding: 15px 10px;
    }
  }

  & .link-text {
    display: inline-block;
    max-width: 100%;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: ${COLORS.lucentWhite};
    font-size: 18px;
    transition: color 0.3s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    @media screen and (max-width: ${BREAKPOINTS.mobile}){
      font-size: 16px;
    }
  }
  &:hover {
    & .link-text {
      color: ${COLORS.white};
    }
  }

  & .link {
    position: absolute;
    inset: 0;
  }
`;
