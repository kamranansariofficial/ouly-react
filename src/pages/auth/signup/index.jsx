import React from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import { Box, Link, Stack, Typography } from "@mui/material";

// login form

// styles
import RootStyled from "../login/styled";
import SignUpCard from "components/card/signUpCard/signUpCard";

export default function SignUp() {
  return (
    <RootStyled>
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
    </RootStyled>
  );
}
