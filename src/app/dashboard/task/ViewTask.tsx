import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Card } from 'antd';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useTaskById } from '@/hooks/useTaskByID';

const StyledCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;
const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin: 0;
`;
const ActionButtons = styled.div`
  display: flex;
  gap: 17px;
  button {
    font-weight: 500;
  }
`;

const TaskContent = styled.div``;
const FieldLabel = styled.div`
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 4px;
`;
const FieldValue = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;
const TaskInfoRow = styled.div`
  display: flex;
  gap: 32px;
`;
const StatusBadge = styled.span<{ status: string }>`
  padding: 4px 12px;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid;
  background-color: ${(props) =>
    props.status === 'Completed'
      ? '#25a125'
      : props.status === 'In Progress'
        ? '#fef3c7'
        : '#f3f4f6'};
  color: ${(props) =>
    props.status === 'Completed'
      ? '#166534'
      : props.status === 'In Progress'
        ? '#92400e'
        : '#374151'};
`;
const TaskField = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div>
    <FieldLabel>{label}</FieldLabel>
    <FieldValue>{value}</FieldValue>
  </div>
);

const ViewTask = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useTaskById(Number(id));
  if (isLoading || !data) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  console.log(`Data from task view:`, data);
  return (
    <StyledCard>
      <CardHeader>
        <Title>Task Details</Title>
        <ActionButtons>
          <Button icon={<EditOutlined />}>Edit</Button>
          <Button icon={<DeleteOutlined />} type="primary" danger>
            Delete
          </Button>
        </ActionButtons>
      </CardHeader>

      <TaskContent>
        <TaskField label="Title" value={data.title} />
        <TaskField label="Description" value={data.description} />

        <TaskInfoRow>
          <TaskField
            label="Status"
            value={
              <StatusBadge status={data.status}>{data.status}</StatusBadge>
            }
          />
          <TaskField label="Due Date" value={data.date} />
        </TaskInfoRow>
      </TaskContent>
    </StyledCard>
  );
};

export default ViewTask;
