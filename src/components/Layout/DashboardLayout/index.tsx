import { Layout, Button } from "antd";
import { Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons";
import styled from "styled-components";
import { useState } from "react";
import Sidebar from "./Sidebar";

import HeaderuserNav from "./HeaderuserNav";

const { Header, Sider, Content } = Layout;

const StyledHeader = styled(Header)`
  background: #fff;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  height: 64px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;



const PageTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-left: 16px;
`;

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleSidebar = () => setCollapsed(!collapsed);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sider collapsed={collapsed} width={250}>
        <Sidebar  collapsed={collapsed}/>
      </Sider>

      {/* Header + Main Content */}
      <Layout>
        <StyledHeader>
          <HeaderLeft>
            <Button
              type="text"
              onClick={toggleSidebar}
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <PageTitle>My Dashboard</PageTitle>
          </HeaderLeft>
          <HeaderuserNav />
        </StyledHeader>

        {/* Content */}
        <Content
          style={{
            margin: "24px 16px",
            padding: "17px",
            background: "#ffffff",
            borderRadius: "7px",
          }}
        >
          
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
