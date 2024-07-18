import axios from 'axios';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useFetchPeople = (fetchParams?: {
  page?: number;
  search?: string;
}) => {
  return useQuery({
    queryKey: ['fetchPeople', fetchParams],
    queryFn: async () => {
      const { data: response } = await axios(__BASE_URL__, {
        params: fetchParams?.search
          ? { search: fetchParams.search }
          : { page: fetchParams?.page, search: '' },
      });

      return response;
    },
    placeholderData: keepPreviousData,
  });
};
