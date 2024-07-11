import styled from '@emotion/styled';
import { Flex } from 'antd';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../styles/variables';

type NavLinkProps = {
  className?: string;
  href: string;
  children: ReactNode;
};
const NavLinkBase = ({
  className,
  children,
  href,
  ...otherProps
}: NavLinkProps) => {
  return (
    <Flex className={className} vertical>
      <Link
        {...otherProps}
        className="nav-link"
        to={href}
      >
        {children}
      </Link>
    </Flex>
  );
};

export const NavLink = styled(NavLinkBase)`
  margin-top: 20px;

  & .nav-link {
    color: ${COLORS.lucentWhite};
    font-size: 20px;
    width: max-content;

    &:hover {
      color: ${COLORS.white};
    }
  }
`;
