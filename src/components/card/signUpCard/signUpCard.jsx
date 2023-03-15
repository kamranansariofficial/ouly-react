import React from "react";
// material
import { CardContent, Typography } from "@mui/material";
// components
import { SignUpForm } from "components/forms";
import RootStyled from "./styled";

export default function SignUpCard() {
  return (
    <RootStyled>
      <CardContent>
        <img
          src="/static/images/signupLogo.png"
          alt="Logo"
          height={104}
          width={100}
        />

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
