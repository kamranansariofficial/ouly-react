import React from "react";
// material
import { Typography } from "@mui/material";
// components
import { InformationCard } from "components";
import RootStyled from "./styled";

export default function ProductInformation() {
  return (
    <RootStyled>
      <Typography variant="h3">Product Information</Typography>
      <InformationCard />
    </RootStyled>
  );
}
