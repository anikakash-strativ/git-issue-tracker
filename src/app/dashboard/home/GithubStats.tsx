import { Row, Col } from 'antd';
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import styled from 'styled-components';

import ProfileCard from '@/features/dashboard/components/ProfileCard';
import { useGitData } from '@/hooks/useGitData';

const GithubContainer = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  span {
    margin-right: 5px;
  }
`;

const ChartContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  height: 350px;
`;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const GithubStats: React.FC = () => {
  const { data, isLoading, error } = useGitData();
  if (isLoading) return <div>Loading GitHub data...</div>;

  // Handle error state
  if (error) return <div>Error loading GitHub data</div>;

  // Handle no data
  if (!data) return <div>No GitHub data available</div>;
  const userData = data?.userDetails;
  const activityBreakdown = data?.userActivityBreakdown;
  const commitActivity = data?.userCommitActivity;
  // const userBio =
  //   'Software Engineer @strativ-dev || Ex. Competitive Programmer || Open Source Enthusiast || love to learn and eat';
  return (
    <GithubContainer>
      <ProfileCard userData={userData} username={data?.userName} />

      <Row gutter={16}>
        <Col xs={24} lg={14}>
          <ChartContainer>
            <SectionTitle>Commit Frequency</SectionTitle>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart
                data={commitActivity.labels.map((label, index) => ({
                  name: label,
                  commits: commitActivity.data[index],
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="commits"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Col>

        <Col xs={24} lg={10}>
          <ChartContainer>
            <SectionTitle>Activity Breakdown</SectionTitle>
            <ResponsiveContainer width="100%" height="85%">
              <PieChart>
                <Pie
                  data={
                    activityBreakdown.length > 0
                      ? [
                          {
                            name: 'Commits',
                            value: activityBreakdown.reduce(
                              (sum, repo) => sum + repo.commits,
                              0
                            ),
                          },
                          {
                            name: 'Pull Requests',
                            value: activityBreakdown.reduce(
                              (sum, repo) => sum + repo.pullRequests,
                              0
                            ),
                          },
                          {
                            name: 'Issues',
                            value: activityBreakdown.reduce(
                              (sum, repo) => sum + repo.issues,
                              0
                            ),
                          },
                          {
                            name: 'Code Reviews',
                            value: activityBreakdown.reduce(
                              (sum, repo) => sum + repo.codeReviews,
                              0
                            ),
                          },
                        ]
                      : []
                  }
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {activityBreakdown.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Col>
      </Row>
    </GithubContainer>
  );
};

export default GithubStats;
