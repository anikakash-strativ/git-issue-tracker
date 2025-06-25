import { GithubFilled } from '@ant-design/icons';
import { Col, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import GithubStats from './GithubStats';
import { StatCard } from '@/features/dashboard/components/StatCard';
import { useTaskStats } from '@/hooks/useTaskStats';

const DashboardHome = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'pages.dashboard',
  });

  const { statistics, isLoading, error } = useTaskStats();
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
          <StatCard title={t('total')} value={statistics?.totalTasks} />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <StatCard title={t('complete')} value={statistics?.totalComplete} />
        </Col>

        <Col xs={24} sm={12} md={8}>
          <StatCard title={t('pending')} value={statistics?.totalPending} />
        </Col>
      </Row>
      <GithubStats />
    </>
  );
};

export default DashboardHome;
