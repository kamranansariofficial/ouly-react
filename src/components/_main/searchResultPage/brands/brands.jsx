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
      {open === "brands-root" && (
        <Stack
          direction="row"
          className="edit-btn"
          justifyContent={"space-between"}
        >
          <Stack direction="row" className="title-top">
            <ReactSVG name="image-add" width={15} />
            Section 1
          </Stack>
          <Stack direction="row">
            <Box className="setting-btn">
              <ReactSVG
                name="replace"
                width={12}
                height={12}
                sx={{ "& > div": { display: "flex" } }}
              />
            </Box>
            <Box className="setting-btn">
              <ReactSVG
                name="lock"
                width={12}
                height={12}
                sx={{ "& > div": { display: "flex" } }}
              />
            </Box>
          </Stack>
        </Stack>
      )}

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
          spacing={3}
          py={1.8}
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
              className={`logo-wrapper ${
                open === `brands-wrapper-${i}` && "active"
              }`}
            >
              <ReactSVG key={v} name={v} width="60px" />
            </Box>
          ))}
        </Stack>
      )}
    </RootStyled>
  );
}
