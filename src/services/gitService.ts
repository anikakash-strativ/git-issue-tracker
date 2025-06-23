import { taskApi } from './apiClient';

export interface GitUserData {
  avatar_url: string;
  bio: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
}

export interface GitCommitActivity {
  data: number[];
  labels: string[];
}

export interface GitActivityBreakdown {
  commits: number;
  pullRequests: number;
  issues: number;
  codeReviews: number;
}

export interface GitDataType {
  username: string;
  userData: GitUserData;
  commitActivity: GitCommitActivity;
  activityBreakdown: GitActivityBreakdown[];
}

export interface userDataType {
  userName: string;
  userDetails: GitUserData;
  userCommitActivity: GitCommitActivity;
  userACtivityBreakdown: GitActivityBreakdown[];
}

const gitDataService = {
  getUser: async (): Promise<GitDataType> => {
    try {
      const response = await taskApi.get('/githubStats');
      return response.data[0];
    } catch (err) {
      console.error('Error fetching tasks:', err);
      throw err;
    }
  },
  getGitUserData: async (): Promise<userDataType> => {
    try {
      const userData = await gitDataService.getUser();
      const userName = userData?.username;
      const userDetails = userData?.userData;
      const userCommitActivity = userData?.commitActivity;
      const userACtivityBreakdown = userData?.activityBreakdown;
      return {
        userName,
        userDetails,
        userCommitActivity,
        userACtivityBreakdown,
      };
    } catch (err) {
      console.error('Error calculating task statistics:', err);
      throw err;
    }
  },
};

export default gitDataService;
