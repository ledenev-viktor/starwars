import { Typography } from 'antd';
import { NavLink } from '../../components/ui';

export const NotFound = () => {
  return (
    <>
      <Typography.Title
        style={{ color: '#fff', textAlign: 'center' }}
        level={1}
      >
        Not found
      </Typography.Title>
      <NavLink href={'/'}>Home</NavLink>
    </>
  );
};
