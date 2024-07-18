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
    font-size: 20px;
    line-height: 1;
    gap: 10px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

function isHexColor(color: string) {
  const hexColorRegex = /^#([0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(color);
}
