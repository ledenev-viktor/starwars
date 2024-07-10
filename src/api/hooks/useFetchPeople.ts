import axios from 'axios';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants';

export const useFetchPeople = (params?: { page?: number; search?: string }) => {
  return useQuery({
    queryKey: ['fetchPeople', params],
    queryFn: async () => {
      const { data: response } = await axios(BASE_URL, {
        params,
      });

      return response;
    },
    placeholderData: keepPreviousData,
  });
};
