import * as React from "react";
// material
import Toolbar from "@mui/material/Toolbar";
import RootStyled from "./styled";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ReactSVG from "utils/reactSVG";
import Button from "@mui/material/Button";

export default function ClippedDrawer({ children }) {
  return (
    <RootStyled
      position="fixed"
      color="inherit"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar className="toolbar">
        <img src="/static/images/logo.png" alt="Logo" width={119} />
        <Stack direction="row" className="actions-stack" gap={2}>
          <IconButton
            size="large"
            aria-label="notifications"
            className="notification-icon-button"
          >
            <ReactSVG name={"notifications"} />
          </IconButton>
          <Button
            size="large"
            variant="contained"
            startIcon={<ReactSVG name={"premium"} />}
            className="premium-btn"
          >
            Upgrade Plan
          </Button>
          <Button
            size="large"
            variant="contained"
            startIcon={<ReactSVG name={"avatar"} height={30} width={30} />}
            className="user-btn"
          >
            AK Zakir{" "}
          </Button>
        </Stack>
      </Toolbar>
    </RootStyled>
  );
}
