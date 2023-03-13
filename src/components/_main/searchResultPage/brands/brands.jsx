import React from "react";
// material
import { Skeleton, Stack, Box } from "@mui/material";
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

export default function Brands({ isLoading, onClick, open }) {
  return (
    <RootStyled
      isLoading={isLoading}
      onClick={(e) => {
        e.stopPropagation();
        onClick("brands-root");
      }}
      className={open === "brands-root" && "active"}
    >
      {isLoading ? (
        <Stack direction="row" justifyContent="center" spacing={5} py={2}>
          {companyLogo.map((v) => (
            <Skeleton key={v} variant="rounded" width="80px" height="40px" />
          ))}
        </Stack>
      ) : (
        <Stack
          direction="row"
          justifyContent="center"
          spacing={5}
          py={1}
          onClick={(e) => {
            e.stopPropagation();
            onClick("brands-wrapper");
          }}
          className={`brands-wrapper ${open === "brands-wrapper" && "active"}`}
        >
          {companyLogo.map((v, i) => (
            <Box
              onClick={(e) => {
                e.stopPropagation();
                onClick(`brands-wrapper-${i}`);
              }}
              className={open === `brands-wrapper-${i}` && "active"}
            >
              <ReactSVG key={v} name={v} width="60px" height="50px" />
            </Box>
          ))}
        </Stack>
      )}
    </RootStyled>
  );
}
