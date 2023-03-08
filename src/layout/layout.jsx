import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import RootStyled from "./styled";
import { Topbar } from "./topbar";
import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export default function ClippedDrawer({ children }) {
  return (
    <RootStyled>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar className="toolbar" />
        <Outlet />
      </Box>
    </RootStyled>
  );
}
