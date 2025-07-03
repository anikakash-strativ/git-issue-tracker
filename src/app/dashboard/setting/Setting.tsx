import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Typography } from 'antd';
import styled from 'styled-components';

const FromtContainer = styled.div`
  max-width: 400px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: #001529;
  color: #fff;
  border: none;
  &:hover {
    background-color: #1890ff !important;
    color: black !important;
  }
`;

const InputGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledInput = styled(Input)`
  /* flex: 1; */
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 30px;
  border-radius: 4px;
  font-size: 18px;
  background-color: black;
  color: white;
  &:hover {
    background-color: #1890ff;
  }
`;
function Setting() {
  return (
    <>
      <Typography.Title level={3}>Setting</Typography.Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={10} md={8}>
          <FromtContainer>
            <Title>Github Configuration</Title>
            <Form layout="vertical">
              <Form.Item
                label="GitHub Username"
                name="githubUsername"
                style={{ fontSize: '18px' }}
              >
                <Input placeholder="Enter your Github username" />
              </Form.Item>
              <Form.Item>
                <StyledButton>Save Settings</StyledButton>
              </Form.Item>
            </Form>
          </FromtContainer>
        </Col>
        <Col xs={24} sm={16} md={16}>
          <FromtContainer>
            <Title>GitHub Repositories</Title>
            <Form layout="vertical">
              <Form.Item name="githubRepo" label="Your GitHub Repo">
                <InputGroup>
                  <StyledInput placeholder="anikakash/shortly" />
                  <IconButton>
                    <PlusOutlined />
                  </IconButton>
                </InputGroup>
              </Form.Item>
              <Form.Item></Form.Item>
            </Form>
          </FromtContainer>
        </Col>
      </Row>
    </>
  );
}

export default Setting;
