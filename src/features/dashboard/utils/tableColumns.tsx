import { CalendarOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const tabilUtils = () => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default';
        if (status === 'Complete') color = 'success';
        else if (status === 'Pending') color = 'warning';
        else if (status === 'In Progress') color = 'processing';

        return (
          <Tag color={color} key={status}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: string) => {
        return (
          <span>
            <CalendarOutlined style={{ marginRight: 8 }} /> {date}
          </span>
        );
      },
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id: number) => (
        <Link to={`view/${id}`} style={{ color: 'blue' }}>
          View
        </Link>
      ),
    },
  ];
  return {
    columns,
  };
};

export default tabilUtils;
