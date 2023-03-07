import React from "react";
// material
import { CardContent, Typography } from "@mui/material";
// components
import { LoginForm } from "components";
import RootStyled from "./styled";

export default function LoginCard() {
  return (
    <RootStyled>
      <CardContent>
        <Typography variant="h3" textAlign="center" color="text.primary">
          Welcome back, Ouly.AI
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mb={4}
          color="text.secondary"
        >
          Welcome back! please enter your details.
        </Typography>
        <LoginForm />
      </CardContent>
    </RootStyled>
  );
}
