import React from "react";
// material
import {
  CardContent,
  Box,
  Avatar,
  Badge,
  Stack,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";

// components
import RootStyled from "./styled";
import ReactSvg from "utils/reactSVG";
export default function SupportCard() {
  return (
    <RootStyled>
      <CardContent>
        <Box className="top-card">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              <Badge
                color="success"
                variant="dot"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Avatar src="/static/images/avatar.png" alt="avatar" />
              </Badge>
              <Stack spacing={0}>
                <Typography variant="subtitle1">Kristin Waston</Typography>
                <Typography variant="body2" color="text.secondary">
                  Nov 25, :53 PM EST
                </Typography>
              </Stack>
            </Stack>
            <IconButton size="small">
              <ReactSvg name="dots" />
            </IconButton>
          </Stack>
        </Box>
        <Stack className="message-sec" spacing={5}>
          <Chip label="Today" />
          {/* received-message */}
          <Stack
            direction="row"
            justifyContent="space-between"
            className="received-message"
          >
            <Stack direction="row" spacing={2} width="100%">
              <Box>
                <Badge
                  color="success"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="/static/images/avatar.png" alt="avatar" />
                </Badge>
              </Box>

              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography variant="subtitle2">Kristin Waston</Typography>
                  <Typography variant="body2" color="text.secondary">
                    11:00am
                  </Typography>
                </Stack>
                <Box className="received-card">
                  <Typography variant="body2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
          {/* send-message */}
          <Stack
            direction="row"
            justifyContent="space-between"
            className="received-message"
          >
            <Stack direction="row" spacing={2} width="100%">
              <Box>
                <Badge
                  color="success"
                  variant="dot"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar src="/static/images/avatar.png" alt="avatar" />
                </Badge>
              </Box>

              <Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Typography variant="subtitle2">Kristin Waston</Typography>
                  <Typography variant="body2" color="text.secondary">
                    11:00am
                  </Typography>
                </Stack>
                <Box className="received-card">
                  <Typography variant="body2">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </RootStyled>
  );
}
