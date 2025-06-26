import { useQuery } from '@tanstack/react-query';

import taskByIdService from '@/services/taskByIdService';
import { TaskType } from '@/services/taskService';

export const useTaskById = (id: number) => {
  const { data, isLoading, error } = useQuery<TaskType>({
    queryKey: ['useTaskById', id],
    queryFn: async () => {
      return await taskByIdService.getTask(id);
    },
  });
  return {
    data,
    isLoading,
    error,
  };
};
