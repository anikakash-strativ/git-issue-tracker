import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();


  return (
    <Result
      status="404"
      title="404"
      subTitle={'not_found_page_title'}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          {'back_home'}
        </Button>
      }
    />
  );
};

export default NotFound;
