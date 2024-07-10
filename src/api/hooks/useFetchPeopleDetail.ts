import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BASE_URL } from '../constants';

export const useFetchPeopleDetail = (detail: string | undefined) => {
  return useQuery({
    queryKey: ['fetchPeopleDetail', detail],
    queryFn: async () => {
      const { data: response } = await axios(
        `${BASE_URL}${detail}`,
      );

      return response;
    },
  });
};
