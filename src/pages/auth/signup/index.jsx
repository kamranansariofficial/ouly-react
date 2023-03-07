import React from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Link, Stack, Typography } from "@mui/material";

// login form

// components
import { SignUpCard } from "components";

export default function SignUp() {
  return (
    <Box className="auth-main">
      <Box className="top-left-circle" />
      <Stack spacing={2} className="main">
        <SignUpCard />
        <Typography variant="subtitle2" color="text.secondary">
          Already have an account
          <Link
            component={RouterLink}
            variant="subtitle2"
            ml={1}
            underline="none"
            to={"/auth/login"}
          >
            sign in
          </Link>
        </Typography>
      </Stack>
      <Box className="bottom-right-circle" />
    </Box>
  );
}
