import React from "react";
// material
import { Typography } from "@mui/material";
// components
import RootStyled from "./styled";
import { CustomerInformationCard } from "components";

export default function CustomerInformation() {
  return (
    <RootStyled>
      <Typography variant="h3">Customer Information</Typography>
      <CustomerInformationCard />
    </RootStyled>
  );
}
