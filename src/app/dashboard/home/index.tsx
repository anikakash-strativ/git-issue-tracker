import { GithubFilled } from '@ant-design/icons';
import { Col, Row, Tooltip, Typography } from 'antd';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

import GithubStats from './GithubStats';
import { StatCard } from '../../../features/dashboard/components/StatCard';
import { useTaskStats } from '../../../hooks/useTaskStats';

const Boady = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TableView = styled.div`
  width: 60%;
  background: white;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-weight: 500;
  color: #585757;
  border-bottom: 1px solid #f0f0f0;
`;

const TaskDate = styled.div`
  /* color: #8c8c8c; */
`;

const ChartContainer = styled.div`
  height: 300px;
  width: 37%;
  padding: 20px;
  background: white;
  padding: 20px;
  border-radius: 7px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const DashboardHome = () => {
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'pages.dashboard',
  // });

  const { statistics, isLoading, error } = useTaskStats();

  const pendingTasks =
    statistics?.tasks?.filter((task) => task.status !== 'Complete') || [];

  const pieData = [
    { name: 'Completed', value: statistics?.totalComplete, color: '#4CAF50' },
    { name: 'Pending', value: statistics?.totalPending, color: '#FFC107' },
    {
      name: 'In Progress',
      value: statistics?.totalInProgress,
      color: '#6ad821',
    },
  ];
  if (isLoading || !statistics) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <Row style={{ marginBottom: 24 }}>
        <Col xs={24} md={8}>
          <Typography.Title level={4} style={{ marginTop: '0px' }}>
            <span>{<GithubFilled />}</span>
            {' GitHub Profile'}
          </Typography.Title>
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <StatCard title={('Total Task')} value={statistics?.totalTasks} />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <StatCard title={('Complete Task')} value={statistics?.totalComplete} />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <StatCard title={('Pending Task')} value={statistics?.totalPending} />
        </Col>
      </Row>
      <GithubStats />
      <Boady>
        <TableView>
          <SectionTitle>Pending Tasks</SectionTitle>
          {pendingTasks.map((task, index) => (
            <TaskItem key={index}>
              <div>{task?.title}</div>
              <TaskDate>{task?.date}</TaskDate>
            </TaskItem>
          ))}
        </TableView>
        <ChartContainer>
          <SectionTitle>Tasks Completion</SectionTitle>
          <ResponsiveContainer width="100%" height="85%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                payload={pieData.map((item) => ({
                  value: item.name,
                  type: 'square',
                  color: item.color,
                }))}
              />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Boady>
    </>
  );
};

export default DashboardHome;
