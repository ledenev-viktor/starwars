import { Breadcrumb, ConfigProvider, BreadcrumbProps } from 'antd';
import { COLORS } from '../../styles/variables';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export const BreadCrumpLink = ({
  href,
  label,
}: {
  href?: string;
  label: string;
}) => {
  const styles = { color: COLORS.white, fontSize: '16px', lineHeight: '.8' };
  return (
    <>
      {href ? (
        <Link to={href} style={styles}>
          {label}
        </Link>
      ) : (
        <span style={styles}>{label}</span>
      )}
    </>
  );
};

interface BreadCrumpProps extends BreadcrumbProps {
  name?: string;
  id?: string;
}

export const BreadCrump: FC<BreadCrumpProps> = ({ ...props }) => (
  <ConfigProvider
    theme={{
      components: {
        Breadcrumb: {
          separatorColor: COLORS.white,
        },
      },
    }}
  >
    <Breadcrumb {...props} />
  </ConfigProvider>
);
