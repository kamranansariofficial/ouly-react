import * as React from "react";
// material
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
// components
import { ColorTabs, ColorPicker, Popover } from "components";
import RootStyled from "./styled";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const anchorRefFilter = React.useRef(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <RootStyled>
      <Stack spacing={2} direction="row" alignItems="center">
        <Box className="gradient">
          <Button
            aria-describedby={id}
            variant="contained"
            ref={anchorRefFilter}
            onClick={handleClick}
          >
            <AddRoundedIcon />
          </Button>
        </Box>
        <ColorTabs />
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        anchorEl={anchorRefFilter.current}
        onClose={handleClose}
      >
        <ColorPicker handleClose={handleClose} />
      </Popover>
    </RootStyled>
  );
}
