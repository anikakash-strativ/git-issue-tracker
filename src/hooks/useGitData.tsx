import { useQuery } from '@tanstack/react-query';

import gitDataService, { userDataType } from '@/services/gitService';

export const useGitData = () => {
  const { data, isLoading, error } = useQuery<userDataType>({
    queryKey: ['useGitData'],
    queryFn: async () => {
      return await gitDataService.getGitUserData();
    },
  });
  return { data, isLoading, error };
};
