import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchPeopleDetail = (detail: string | undefined) => {
  return useQuery({
    queryKey: ['fetchPeopleDetail', detail],
    queryFn: async () => {
      const { data: response } = await axios(
        `${__BASE_URL__}${detail}`,
      );

      return response;
    },
  });
};
