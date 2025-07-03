import { useQuery } from '@tanstack/react-query';

import taskService, { type TaskStatistics } from '../services/taskService';

export const useTaskStats = () => {
  const { data, isLoading, error } = useQuery<TaskStatistics>({
    queryKey: ['useTaskStats'],
    queryFn: async () => {
      return await taskService.getTaskStatistics();
    },
  });
  return {
    statistics: data,
    isLoading,
    error,
  };
};
