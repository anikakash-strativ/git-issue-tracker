import React from 'react';
import { Menu } from 'antd';
import {
  SettingOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  CalendarOutlined,
  FolderOutlined
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  height: 100%;
  background-color: #fafafa;
`;

const Logo = styled.div`
  padding: 20px 16px;
  font-size: 22px;
  font-weight: bold;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StyledMenu = styled(Menu)`
  border-right: none;
  background-color: transparent;
  font-size: 16px;

  .ant-menu-item {
    height: 50px;
    line-height: 50px;
    margin: 4px 0;
    font-weight: 400;
    
    &:hover {
      background-color: #f0f0f0;
    }
  }

  .ant-menu-item-selected {
    background-color: #f0f2f5;
    box-shadow: 1 2px 6px rgba(124, 120, 120, 0.05);
    font-weight: 600;
    color: #1a1a1a;

    &::after {
      display: none;
    }
  }

  .ant-menu-item .anticon {
    color: #6b7280;
    font-size: 18px;
  }
  
  .ant-menu-item-selected .anticon {
    color: #1a1a1a;
  }
`;

const Sidebar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SidebarContainer>
      <Logo>
        <FolderOutlined style={{ color: '#f0c000', fontSize: '24px' }} /> 
       {!collapsed && 'Task Admin'}
      </Logo>
      <StyledMenu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            label: 'Dashboard',
            key: '/dashboard',
            icon: <AppstoreOutlined />,
          },
          {
            label: 'Tasks',
            key: '/tasks',
            icon: <UnorderedListOutlined />,
          },
          {
            label: 'Create Task',
            key: '/create-task',
            icon: <CalendarOutlined />,
          },
          {
            label: 'Calander',
            key: '/calander',
            icon: <CalendarOutlined/>
          },
          {
            label: 'Setting',
            key: '/setting',
            icon: <SettingOutlined />,
          }
        ]}
      />
    </SidebarContainer>
  );
};

export default Sidebar;