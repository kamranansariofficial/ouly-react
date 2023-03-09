import React from "react";
// material
import { Stack } from "@mui/material";
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

export default function Brands() {
  return (
    <RootStyled>
      <Stack direction="row" justifyContent="center" spacing={5} py={1}>
        {companyLogo.map((v) => (
          <ReactSVG key={v} name={v} width="60px" height="50px" />
        ))}
      </Stack>
    </RootStyled>
  );
}
