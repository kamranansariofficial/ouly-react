import React from "react";
// material
import { Typography } from "@mui/material";
// components
import { SupportCard } from "components";
import RootStyled from "./styled";

export default function Supports() {
  return (
    <RootStyled>
      <Typography variant="h3">Support</Typography>
      <SupportCard />
    </RootStyled>
  );
}
