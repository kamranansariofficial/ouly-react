import { CardContent, Typography } from "@mui/material";
import { SignUpForm } from "components/forms";
import React from "react";
import RootStyled from "./styled";
export default function SignUpCard() {
  return (
    <RootStyled>
      <CardContent>
        <Typography variant="h3" textAlign="center" color="text.primary">
          Welcome, Ouly.AI
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mb={4}
          color="text.secondary"
        >
          Welcome back! please enter your details.
        </Typography>
        <SignUpForm />
      </CardContent>
    </RootStyled>
  );
}
