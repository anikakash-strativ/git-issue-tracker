import { taskApi } from './apiClient';
import { type TaskType } from './taskService';

const taskByIdService = {
  getTask: async (id: number): Promise<TaskType> => {
    try {
      const response = await taskApi.get(`/tasks/${id}`);
      return response.data;
    } catch (err) {
      console.error('Error fetching tasks:', err);
      throw err;
    }
  },
};

export default taskByIdService;
