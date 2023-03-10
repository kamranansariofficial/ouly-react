import React from "react";
// material
import { Skeleton, Stack } from "@mui/material";
// utils
import ReactSVG from "utils/reactSVG";
// components
import RootStyled from "./styled";

const companyLogo = [
  "airbnb",
  "hubspot",
  "google",
  "microsoft",
  "walmart",
  "fedex",
];

export default function Brands({ isLoading }) {
  return (
    <RootStyled isLoading={isLoading}>
      {isLoading ? (
        <Stack direction="row" justifyContent="center" spacing={5} py={2}>
          {companyLogo.map((v) => (
            <Skeleton key={v} variant="rounded" width="80px" height="40px" />
          ))}
        </Stack>
      ) : (
        <Stack direction="row" justifyContent="center" spacing={5} py={1}>
          {companyLogo.map((v) => (
            <ReactSVG key={v} name={v} width="60px" height="50px" />
          ))}
        </Stack>
      )}
    </RootStyled>
  );
}
