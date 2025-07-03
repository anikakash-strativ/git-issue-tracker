import { Switch } from "antd";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";
import { MoonFilled, SunFilled } from "@ant-design/icons";

const ToggleWrapper = styled.div`
  text-align: right;
  margin-bottom: 1rem;
`;
const ThemeMood = () => {
    
  const themeContext = useTheme();
  if (!themeContext) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { themeMode, toggleTheme } = themeContext;

  return (
    <ToggleWrapper>
      <Switch
        checked={themeMode === "dark"}
        onChange={toggleTheme}
        checkedChildren={<SunFilled/>}
        unCheckedChildren={<MoonFilled/>}
      />
    </ToggleWrapper>
  );
};

export default ThemeMood;
