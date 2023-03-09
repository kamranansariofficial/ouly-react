import * as React from "react";
// react router dom
import { Outlet } from "react-router-dom";
// material
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
// layout
import RootStyled from "./styled";
import { Topbar } from "./topbar";

export default function EditLayout() {
  return (
    <RootStyled>
      <CssBaseline />
      <Topbar />
      <Box component="main">
        <Toolbar className="toolbar" />
        <Outlet />
      </Box>
    </RootStyled>
  );
}
