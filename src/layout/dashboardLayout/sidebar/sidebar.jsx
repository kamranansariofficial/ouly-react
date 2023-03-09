import * as React from "react";
// react router dom
import { useNavigate, useLocation } from "react-router-dom";
// material
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReactSVG from "utils/reactSVG";
// components
import RootStyled from "./styled";
import menuConfig from "../config";

export default function ClippedDrawer({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <RootStyled variant="permanent">
      <Toolbar className="toolbar" />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuConfig.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => navigate(text.link)}
                className={`list-item ${pathname === text.link && "active"}`}
              >
                <ListItemIcon>
                  <ReactSVG name={text.icon} />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box className="logout-sec">
        <List>
          <ListItem disablePadding>
            <ListItemButton className="list-item">
              <ListItemIcon>
                <ReactSVG name={"edit"} />
              </ListItemIcon>
              <ListItemText primary={"Editing"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton className="list-item">
              <ListItemIcon>
                <ReactSVG name={"logout"} />
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </RootStyled>
  );
}
