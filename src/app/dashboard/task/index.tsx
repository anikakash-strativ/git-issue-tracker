import { PlusOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import styled from 'styled-components';

import tableColumns from '../../../features/dashboard/utils/tableColumns';
import { useTaskStats } from '../../../hooks/useTaskStats';

const DataTable = styled.div`
  background-color: #ffffff;
  padding: 17px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  min-height: 100vh;
`;

const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 700;
`;

const Body = styled.div``;

const NewTaskButton = styled(Button)`
  background-color: #0f172a;
  color: white;
  border-radius: 8px;
  height: 40px;
  font-weight: 500;
`;

const StyledTable = styled(Table)`
  border-radius: 7px;
  box-shadow: 0 3px 4px rgba(15, 15, 15, 0.1);

  .ant-table-thead > tr > th {
    background-color: #f1f5f9;
  }

  .ant-table-tbody > tr > td {
    padding: 15px 20px;
  }

  .ant-table-tbody > tr:hover > td {
    background-color: #f1f5f9;
  }
`;

const Tasks = () => {
  const { statistics, isLoading, error } = useTaskStats();
  const { columns } = tableColumns();

  // console.log(statistics?.tasks);
  if (isLoading || !statistics) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <>
      <DataTable>
        <TableHead>
          <Title>Tasks</Title>
          <NewTaskButton icon={<PlusOutlined />}>New Task</NewTaskButton>
        </TableHead>
        <Body>
          <StyledTable columns={columns} dataSource={statistics?.tasks} />
        </Body>
      </DataTable>
    </>
  );
};

export default Tasks;
