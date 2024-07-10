import { Link } from 'react-router-dom';
import { Card as CardAntd } from 'antd';
import { FC, ReactNode } from 'react';
import styled from '@emotion/styled';
import { COLORS } from '../../../styles/variables';

type CardProps = {
  className?: string;
  href?: string;
  children: ReactNode;
};

const CardBase: FC<CardProps> = ({ className, href, children }) => {
  return (
    <CardAntd className={className}>
      {href ? (
        <>
          <span className="link-text">{children}</span>
          <Link className="link" to={href}></Link>
        </>
      ) : (
        <span>{children}</span>
      )}
    </CardAntd>
  );
};

export const Card = styled(CardBase)`
  position: relative;
  background: ${COLORS.lucentBlack};

  & .ant-card-body {
    padding: 10px;
  }

  & .link-text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${COLORS.lucentWhite};
    font-size: 16px;
    transition: color .3s ease;
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
