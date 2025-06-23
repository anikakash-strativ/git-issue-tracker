import { Card } from 'antd';
import styled from 'styled-components';

export const StyledProfileCard = styled(Card)`
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const UserInfo = styled.div`
  margin-left: 16px;
`;

export const Username = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const UserBio = styled.p`
  margin: 4px 0 0;
  color: #666;
`;
