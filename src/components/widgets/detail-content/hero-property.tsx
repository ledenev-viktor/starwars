import styled from '@emotion/styled';
import { COLORS } from '~styles/variables';

const HeroPropertyBase = ({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) => {
  return (
    <div className={className}>
      <span className="label">{label}: </span>
      {isHexColor(value) ? (
        <span
          style={{
            background: value,
            width: '24px',
            height: '24px',
            display: 'inline-block',
            borderRadius: '50%',
          }}
        ></span>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

export const HeroProperty = styled(HeroPropertyBase)`
  & {
    display: inline-flex;
    align-items: center;
    color: ${COLORS.white};
    font-size: 25px;
    line-height: 1;
    gap: 10px;
    justify-content: space-between;
    transition: all .3s ease;

    @media screen and (max-width: 767px) {
      font-size: 18px;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &:hover {
    scale: 1.05;
  }
`;

function isHexColor(color: string) {
  const hexColorRegex = /^#([0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(color);
}
