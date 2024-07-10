import { useCallback, useEffect, useState } from 'react';
import { useFetchPeople } from '../../../api/hooks/useFetchPeople';
import { Flex, List, PaginationProps, Typography } from 'antd';
import { extractNumberFromUrl } from '../../utils';
import { Input, Card, Pagination, Spin } from '../../ui';
import { debounce } from 'lodash';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';

export const MainContent = () => {
  const [page, setPage] = useLocalStorageState('pager', 1);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedVearchValue, setDebouncedSearchValue] = useState('');
  const { data: people, isLoading: isLoadingPeople } = useFetchPeople({
    page,
    search: debouncedVearchValue,
  });

  const handlePager: PaginationProps['onChange'] = page => {
    setPage(page);
  };

  const debouncedSetSearch = useCallback(
    debounce(value => {
      setDebouncedSearchValue(value);
    }, 500),
    [],
  );

  useEffect(() => {
    debouncedSetSearch(searchValue);
  }, [searchValue, debouncedSetSearch]);

  if (isLoadingPeople) {
    return <Flex justify='center'><Spin/></Flex>;
  }

  return (
    <Flex vertical>
      <Typography.Title
        style={{ color: '#fff', textAlign: 'center' }}
        level={1}
      >
        Stars Wars
      </Typography.Title>
      <Input
        placeholder="search"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 5,
          xl: 5,
          xxl: 5,
        }}
        locale={{
          emptyText: (
            <Typography.Title style={{ color: '#fff' }} level={3}>
              No data
            </Typography.Title>
          ),
        }}
        dataSource={people?.results}
        renderItem={(item: { [key: string]: string }) => (
          <List.Item>
            <Card href={'/people/' + extractNumberFromUrl(item.url)}>
              {item.name}
            </Card>
          </List.Item>
        )}
      />
      <Pagination
        onChange={handlePager}
        defaultCurrent={1}
        current={page}
        total={people.count}
        hideOnSinglePage={true}
        responsive={true}
        showSizeChanger={false}
      />
    </Flex>
  );
};
