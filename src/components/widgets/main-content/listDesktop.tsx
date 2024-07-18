import { Flex, PaginationProps } from 'antd';
import { useFetchPeople, useLocalStorageState } from '~hooks';
import { Pagination, Spin } from '~ui';
import { ListMainContent } from './ListMainContent';
import { useEffect, useState } from 'react';

export const ListDesktop = ({ searchValue }: { searchValue: string }) => {
  const [page, setPage] = useLocalStorageState('pager', 1);
  const [showPager, setShowPager] = useState(true);

  useEffect(() => {
    searchValue.length > 0 ? setShowPager(false) : setShowPager(true);
  }, [searchValue]);

  const { data: people, isLoading: isLoadingPeople } = useFetchPeople({
    page,
    search: searchValue,
  });

  const handlePager: PaginationProps['onChange'] = page => {
    setPage(page);
  };

  const itemsList = people?.results;

  if (isLoadingPeople) {
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );
  }

  return (
    <>
      <ListMainContent dataSource={itemsList} />
      {showPager && (
        <Pagination
          align="center"
          onChange={handlePager}
          defaultCurrent={1}
          current={page}
          total={people?.count}
          hideOnSinglePage={true}
          responsive={true}
          showSizeChanger={false}
        />
      )}
    </>
  );
};
