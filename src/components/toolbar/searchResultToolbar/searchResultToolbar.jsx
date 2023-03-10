import React from "react";
// material
import { Stack, IconButton, Skeleton, Box } from "@mui/material";
// components
import ReactSVG from "utils/reactSVG";
import RootStyled from "./styled";

export default function SearchResultToolbar({ isLoading }) {
  return (
    <RootStyled isLoading={isLoading}>
      {isLoading ? (
        <Box sx={{ float: "right" }} my={2}>
          <Stack direction="row" spacing={2}>
            <Skeleton variant="rounded" width={40} height={40} />
            <Skeleton variant="rounded" width={40} height={40} />
            <Skeleton variant="rounded" width={40} height={40} />
          </Stack>
        </Box>
      ) : (
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
      )}
    </RootStyled>
  );
}
