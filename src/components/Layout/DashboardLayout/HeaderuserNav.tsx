import { Button, Space, Avatar, Badge} from "antd";
import styled from "styled-components";
import { 
  BellOutlined,
  SearchOutlined,
  UserOutlined
} from "@ant-design/icons";

import ThemeMood from "@/components/ThemeMood";

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;


const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 24px;
  padding: 6px 16px;
  margin-right: 16px;
  width: 240px;
  
  .anticon {
    color: #8c8c8c;
    margin-right: 8px;
  }
  
  input {
    background: transparent;
    border: none;
    outline: none;
    color: #333;
    width: 100%;
    
    &::placeholder {
      color: #999;
    }
  }
`;

const IconButton = styled(Button)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .anticon {
    font-size: 16px;
  }
`;

function HeaderuserNav() {
return (
      <>
        <HeaderRight>
          <SearchBox>
            <SearchOutlined />
            <input placeholder="Search..." />
          </SearchBox>

          <Space size={16}>
            <Badge count={4} size="small">
              <IconButton type="text" icon={<BellOutlined />} />
            </Badge>

            <ThemeMood />

            <Avatar icon={<UserOutlined />} />
          </Space>
        </HeaderRight>
      </>
  );
}

export default HeaderuserNav;
