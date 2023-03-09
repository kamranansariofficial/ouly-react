import React from "react";
// material
import { Stack, IconButton } from "@mui/material";
// components
import ReactSVG from "utils/reactSVG";
import RootStyled from "./styled";

export default function SearchResultToolbar() {
  return (
    <RootStyled>
      <Stack direction="row" spacing={2}>
        <IconButton
          size="large"
          aria-label="notifications"
          className="action-icon-button active"
        >
          <ReactSVG name={"desktop"} />
        </IconButton>
        <IconButton
          size="large"
          aria-label="notifications"
          className="action-icon-button"
        >
          <ReactSVG name={"tablet"} />
        </IconButton>
        <IconButton
          size="large"
          aria-label="notifications"
          className="action-icon-button"
        >
          <ReactSVG name={"mobile"} />
        </IconButton>
      </Stack>
    </RootStyled>
  );
}
