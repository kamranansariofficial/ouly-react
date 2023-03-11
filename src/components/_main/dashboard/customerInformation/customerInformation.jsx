import React from "react";
// material
import { Typography, Skeleton } from "@mui/material";
// components
import RootStyled from "./styled";
import { CustomerInformationCard } from "components";

export default function CustomerInformation({ isLoading }) {
  return (
    <RootStyled>
      <Typography variant="h3">
        {isLoading ? (
          <Skeleton variant="text" width={312} />
        ) : (
          "Customer Information"
        )}
      </Typography>
      <CustomerInformationCard isLoading={isLoading} />
    </RootStyled>
  );
}
