import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { COLORS } from '~styles/variables';

export const HeroPropertyModalBase = ({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <span className="label">{label}</span>
      {children}
    </div>
  );
};

export const HeroPropertyModal = styled(HeroPropertyModalBase)`
  .label {
    display: inline-block;
    color: ${COLORS.white};
    margin-bottom: 5px;
    font-size: 25px;
  }
`;
