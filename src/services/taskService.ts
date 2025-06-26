import { taskApi } from './apiClient';

export interface TaskType {
  id: number;
  title: string;
  status: 'In Progress' | 'Complete' | 'Pending';
  date: string;
  description: string;
}

export interface TaskStatistics {
  totalTasks: number;
  totalComplete: number;
  totalPending: number;
  totalInProgress: number;
  tasks: TaskType[];
}

const taskService = {
  getTasks: async (): Promise<TaskType[]> => {
    try {
      const response = await taskApi.get('/tasks');
      return response.data;
    } catch (err) {
      console.error('Error fetching tasks:', err);
      throw err;
    }
  },

  getTaskStatistics: async (): Promise<TaskStatistics> => {
    try {
      const tasks = await taskService.getTasks();

      const totalTasks = tasks.length;
      const totalComplete = tasks.filter(
        (task) => task.status === 'Complete'
      ).length;
      const totalPending = tasks.filter(
        (task) => task.status === 'Pending'
      ).length;
      const totalInProgress = tasks.filter(
        (task) => task.status === 'In Progress'
      ).length;

      return {
        totalTasks,
        totalComplete,
        totalPending,
        totalInProgress,
        tasks,
      };
    } catch (error) {
      console.error('Error calculating task statistics:', error);
      throw error;
    }
  },
};
export default taskService;
