import { useQuery } from '@tanstack/react-query';

import type { UserDataType } from '../services/gitService';
import gitDataService from '../services/gitService';

export const useGitData = () => {
  const { data, isLoading, error } = useQuery<UserDataType>({
    queryKey: ['useGitData'],
    queryFn: async () => {
      return await gitDataService.getGitUserData();
    },
  });
  return { data, isLoading, error };
};
