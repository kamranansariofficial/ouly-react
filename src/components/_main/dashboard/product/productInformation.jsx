import React from "react";
// material
import { Typography, Skeleton } from "@mui/material";
// components
import { InformationCard } from "components";
import RootStyled from "./styled";

export default function ProductInformation({ isLoading }) {
  return (
    <RootStyled>
      <Typography variant="h3">
        {isLoading ? (
          <Skeleton variant="text" width={320} />
        ) : (
          " Product Information"
        )}
      </Typography>
      <InformationCard isLoading={isLoading} />
    </RootStyled>
  );
}
