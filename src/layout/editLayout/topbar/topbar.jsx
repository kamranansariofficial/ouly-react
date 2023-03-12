import React from "react";
// material
import { IconButton, Button, Stack, Toolbar, Divider } from "@mui/material";
// utils
import ReactSVG from "utils/reactSVG";
// components
import RootStyled from "./styled";

export default function EditBar() {
  return (
    <RootStyled
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className="toolbar">
        <Stack direction="row" spacing={2}>
          <IconButton
            size="large"
            aria-label="logout"
            className="logout-icon-button"
          >
            <ReactSVG name={"logout-icon"} height={32} width={32} />
          </IconButton>
          <Divider
            orientation="vertical"
            className="divider"
            variant="middle"
            flexItem
          />
        </Stack>
        <Stack direction="row" spacing={4}>
          <Divider
            orientation="vertical"
            className="divider"
            variant="middle"
            flexItem
          />
          <Stack direction="row">
            <IconButton
              size="large"
              aria-label="reload"
              className="reload-icon-button"
            >
              <ReactSVG name={"reload"} />
            </IconButton>
            <IconButton
              size="large"
              aria-label="reload1"
              className="reload-icon-button"
            >
              <ReactSVG name={"reload1"} />
            </IconButton>
          </Stack>
          <Divider
            orientation="vertical"
            className="divider"
            variant="middle"
            flexItem
          />
          <Button size="large" variant="contained" className="save-btn">
            Save
          </Button>
        </Stack>
      </Toolbar>
    </RootStyled>
  );
}
