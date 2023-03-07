import * as React from "react";
import Box from "@mui/material/Box";

import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ReactSVG from "utils/reactSVG";
import RootStyled from "./styled";
import menuConfig from "../config";

export default function ClippedDrawer({ children }) {
  return (
    <RootStyled variant="permanent">
      <Toolbar className="toolbar" />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuConfig.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton
                className={`list-item ${index === 0 && "active"}`}
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
