import * as React from "react";
// material
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import RootStyled from "./styled";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
export default function ColorTabs() {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootStyled>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value={1} className="aqua" />
        <Tab value={2} className="primary-dark" />
        <Tab value={3} className="primary" />
      </Tabs>
      <IconButton size="small" className="icon-btn">
        <CloseRoundedIcon />
      </IconButton>
    </RootStyled>
  );
}
