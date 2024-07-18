import { useEffect } from 'react';
import { Flex } from 'antd';
import { useFetchInfinitePeople } from '~hooks';
import { Spin } from '~ui';
import { useInView } from 'react-intersection-observer';
import { ListMainContent } from './ListMainContent';

export const ListMobile = ({ searchValue }: { searchValue: string }) => {
  const { ref: refList, inView: inViewList } = useInView();

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useFetchInfinitePeople(searchValue);

  const itemsList = data?.pages
    .map(items => items.results)
    .reduce((acc, cur) => {
      acc.push(...cur);
      return acc;
    }, []);

  useEffect(() => {
    if (!refList || !hasNextPage) return;
    if (inViewList) {
      fetchNextPage();
    }
  }, [inViewList]);

  if (isLoading) {
    return (
      <Flex justify="center">
        <Spin />
      </Flex>
    );
  }

  return (
    <>
      <ListMainContent dataSource={itemsList} />
      <div ref={refList}></div>
    </>
  );
};
