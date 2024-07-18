import { List, Typography } from 'antd';
import { COLORS } from '~styles/variables';
import { Card } from '~ui';

export const ListMainContent = ({ dataSource = [] }) => {
  return (
    <List
      style={{minHeight: '156px'}}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 2,
        lg: 5,
        xl: 5,
        xxl: 5,
      }}
      locale={{
        emptyText: (
          <Typography.Title style={{ color: COLORS.white }} level={3}>
            No data
          </Typography.Title>
        ),
      }}
      dataSource={dataSource}
      renderItem={(item: { [key: string]: string }) => (
        <List.Item>
          <Card href={'/people/' + item.url.split('/').find(Number)}>
            {item.name}
          </Card>
        </List.Item>
      )}
    />
  );
};
