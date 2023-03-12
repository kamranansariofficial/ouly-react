import React from "react";
// material
import {
  Stack,
  IconButton,
  Skeleton,
  Box,
  Divider,
  Typography,
} from "@mui/material";
// components
import ReactSVG from "utils/reactSVG";
import RootStyled from "./styled";
import { Select } from "components";
import ReactSvg from "utils/reactSVG";

const data = ["Version 1", "Version 2", "Version 3"];
const color = ["#2563EB", "#232859", "#6B7280", "#EFF6FF"];
const time = new Date();
export default function SearchResultToolbar({ ...props }) {
  const { state, isLoading, onClickView, isEdit } = props;
  return (
    <RootStyled isLoading={isLoading} state={state} isEdit={isEdit}>
      {isEdit && (
        <Stack direction="row" alignItems="center" spacing={8}>
          <Box width={137}>
            {isLoading ? (
              <Skeleton variant="rounded" width={137} height={52} />
            ) : (
              <Select data={data} label="Version 1" />
            )}
          </Box>
          <Divider
            orientation="vertical"
            className="divider"
            variant="middle"
            flexItem
            sx={{ opacity: isLoading && 0 }}
          />
          <Stack direction="row" spacing={1} alignItems="center">
            {isLoading ? (
              <Skeleton variant="circular" width={18} height={18} />
            ) : (
              <ReactSvg name="clock" height={18} width={18} />
            )}
            <Typography variant="body1" fontWeight={500}>
              {isLoading ? (
                <Skeleton variant="text" width={51} />
              ) : (
                time.toLocaleString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
              )}
            </Typography>
          </Stack>
          <Divider
            orientation="vertical"
            className="divider"
            variant="middle"
            flexItem
            sx={{ opacity: isLoading && 0 }}
          />
          <Stack direction="row" spacing={1} alignItems="center">
            {color.map((v) => (
              <>
                {isLoading ? (
                  <Skeleton variant="rounded" width={24} height={24} />
                ) : (
                  <Box
                    key={v}
                    sx={{
                      height: 24,
                      width: 24,
                      bgcolor: v,
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                  ></Box>
                )}
              </>
            ))}
          </Stack>
        </Stack>
      )}
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
            aria-label="desktop"
            className={`action-icon-button ${
              state === "desktop" ? "active" : ""
            }`}
            onClick={() => onClickView("desktop")}
          >
            <ReactSVG name={"desktop"} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="notifications"
            className={`action-icon-button ${
              state === "tablet" ? "active" : ""
            }`}
            onClick={() => onClickView("tablet")}
          >
            <ReactSVG name={"tablet"} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="notifications"
            className={`action-icon-button ${
              state === "mobile" ? "active" : ""
            }`}
            onClick={() => onClickView("mobile")}
          >
            <ReactSVG name={"mobile"} />
          </IconButton>
        </Stack>
      )}
    </RootStyled>
  );
}
