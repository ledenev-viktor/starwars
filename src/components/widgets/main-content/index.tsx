import {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Flex, List, ListProps, PaginationProps, Typography } from 'antd';
import { useFetchPeople, useLocalStorageState } from '~hooks';
import { Input, Card, Pagination, Spin } from '~ui';
import { debounce } from 'lodash';

import axios from 'axios';
import { useInfiniteQuery } from '@tanstack/react-query';

export const MainContent = () => {
  const [page, setPage] = useLocalStorageState('pager', 1);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedVearchValue, setDebouncedSearchValue] = useState('');

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [listItems, setListItems] = useState([]);
  const listRef = useRef<any>(null);

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

  const fetchListItems = async ({ pageParam }: { pageParam: number }) => {
    console.log('pageParam', pageParam);
    const { data: response } = await axios(__BASE_URL__, {
      params: { page: pageParam },
    });
    // setListItems([...listItems, ...response.results]);
    console.log('response', response);
    const { results, count } = response;
    return { results, count };
  };

  // useEffect(() => {
  //   fetchListItems(currentPage);
  // }, [currentPage]);

  console.log('data', listItems);

  const getMoreItem = () => {
    if (listRef.current) {
      const list = listRef.current.getBoundingClientRect();
      console.log(list.bottom);
      if (list.bottom * 0.9 < window.innerHeight) {
        setCurrentPage(prevState => prevState + 1);
      }
    }
  };

  const { data, status, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['li'],
      queryFn: fetchListItems,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPage) => {
        const allPages = allPage.reduce((acc, {results}) => {
          acc.push(...results);
          return acc;
        }, []);

        const nextPage = allPages.length !== lastPage.count
          ? allPage.length + 1
          : undefined;

        return nextPage;
      },
    });
  console.log('data => ', data);

  const content = data?.pages.map(items =>
    items.results.map(item => {
      return (
        <li key={item.url}>
          <Card href={'/people/' + item.url.split('/').find(Number)}>
            {item.name}
          </Card>
        </li>
      );
    }),
  );

  if (isLoadingPeople) {
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );
  }

  return (
    <Flex ref={listRef} vertical gap={20}>
      <Typography.Title
        style={{ color: '#fff', textAlign: 'center', margin: 0 }}
        level={1}
      >
        Stars Wars
      </Typography.Title>
      <Input
        placeholder="search"
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
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
            <Card href={'/people/' + item.url.split('/').find(Number)}>
              {item.name}
            </Card>
          </List.Item>
        )}
      />
      <ul>{content}</ul>

      {hasNextPage &&
        <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? 'load more...' : 'load more'}
        </button>
      }
      {/* {listItems?.length > 0 && (
        <div>
          <ul>
            {listItems?.map(item => {
              return (
                <li key={item.url.split('/').find(Number)}>
                  <Card href={'/people/' + item.url.split('/').find(Number)}>
                    {item.name}
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button
        onClick={() => {
          setCurrentPage(prev => prev + 1);
        }}
      >
        load
      </button> */}

      {/* <Pagination
        onChange={handlePager}
        defaultCurrent={1}
        current={page}
        total={people.count}
        hideOnSinglePage={true}
        responsive={true}
        showSizeChanger={false}
      /> */}
    </Flex>
  );
};
