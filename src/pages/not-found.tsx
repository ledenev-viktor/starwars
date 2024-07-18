import { Typography } from 'antd';
import { BreadCrump, BreadCrumpLink } from '~ui';

export const NotFound = () => {
  return (
    <>
      <BreadCrump
        items={[
          { title: <BreadCrumpLink href={'/'} label="Home" /> },
          { title: <BreadCrumpLink label={'404'} /> },
        ]}
      />
      <Typography.Title
        style={{ color: '#fff', textAlign: 'center' }}
        level={1}
      >
        Not found
      </Typography.Title>
    </>
  );
};
