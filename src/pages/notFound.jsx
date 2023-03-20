import React from "react";
import { Stack, Box } from "@mui/material";
export default function NotFound() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Box
        component="img"
        src="/static/images/not-found.png"
        width={400}
        height={400}
      />
    </Stack>
  );
}
