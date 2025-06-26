import { Card, Row } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  height: 100%;

  .ant-card-body {
    padding: 0px;
    padding-left: 17px;
  }
`;

export const StatNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #333333;
  margin-top: 8px;
`;

export const HeaderRow = styled(Row)`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
