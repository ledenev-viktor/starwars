import axios from 'axios';
import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';

export const useFetchInfinitePeople = (searchValue = '') => {
  return useInfiniteQuery({
    queryKey: ['li', searchValue],
    queryFn: async ({ pageParam }, search = searchValue) => {
      const { data: response } = await axios(__BASE_URL__, {
        params: { page: pageParam, search },
      });
      const { results, count } = response;
      return { results, count };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPage) => {
      const allPages = allPage.reduce((acc, { results }) => {
        acc.concat(...results);
        return acc;
      }, []);

      const nextPage =
        allPages.length !== lastPage.count ? allPage.length + 1 : undefined;

      return nextPage;
    },
    placeholderData: keepPreviousData,
  });
};
