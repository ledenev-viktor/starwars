import { ReactNode } from 'react';
import { Flex, Typography } from 'antd';

type FormEditsProps = {
  className?: string;
  items: string[][];
  renderItem: (item: string[]) => ReactNode;
};

export const FormEdits = ({ className, items, renderItem }: FormEditsProps) => {
  if (items.length < 1) {
    return (
      <Typography.Title style={{ color: '#fff' }} level={3}>
        No data
      </Typography.Title>
    );
  }

  return (
    <Flex className={className} vertical>
      {items.map(renderItem)}
    </Flex>
  );
};