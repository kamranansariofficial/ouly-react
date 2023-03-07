import React from "react";
import { Link as RouterLink } from "react-router-dom";

// material
import { Link, Box, Stack, Typography } from "@mui/material";

// login form
import { LoginCard } from "components";

export default function Login() {
  return (
    <Box className="auth-main">
      <Box className="top-left-circle" />
      <Stack spacing={2} className="main">
        <LoginCard />
        <Typography variant="subtitle2" color="text.secondary">
          Don’t have an account?
          <Link
            component={RouterLink}
            variant="subtitle2"
            underline="none"
            ml={1}
            to={"/auth/sign-up"}
          >
            sign up
          </Link>
        </Typography>
      </Stack>
      <Box className="bottom-right-circle" />
    </Box>
  );
}
