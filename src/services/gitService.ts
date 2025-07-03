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

// Standardized type naming with proper capitalization
export interface UserDataType {
  userName: string;
  userDetails: GitUserData;
  userCommitActivity: GitCommitActivity;
  userActivityBreakdown: GitActivityBreakdown[];
}

const gitDataService = {
  getUser: async (): Promise<GitDataType> => {
    try {
      const response = await taskApi.get('/githubStats');
      return response.data[0];
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      // Throw a more user-friendly error
      throw new Error('Failed to fetch GitHub data. Please try again later.');
    }
  },
  getGitUserData: async (): Promise<UserDataType> => {
    try {
      const userData = await gitDataService.getUser();
      const userName = userData?.username;
      const userDetails = userData?.userData;
      const userCommitActivity = userData?.commitActivity;
      const userActivityBreakdown = userData?.activityBreakdown;
      return {
        userName,
        userDetails,
        userCommitActivity,
        userActivityBreakdown,
      };
    } catch (err) {
      console.error('Error fetching GitHub data:', err);
      // Throw a more user-friendly error
      throw new Error('Failed to fetch GitHub user data. Please try again later.');
    }
  },
};

export default gitDataService;
