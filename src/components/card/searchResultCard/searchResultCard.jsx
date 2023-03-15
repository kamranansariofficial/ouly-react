import React from "react";
// material
import { CardContent, Grid, Stack, Button, Box } from "@mui/material";
import ReactSvg from "utils/reactSVG";
// components
import {
  ImageCarousel,
  ProductSummary,
  Brands,
  Blog,
  CustomerProducts,
  Banner,
  Offers,
  AboutUs,
} from "components";
import RootStyled from "./styled";

export default function SearchResultCard({
  isLoading,
  viewPort,
  onClick,
  open,
  isEditMode,
}) {
  return (
    <RootStyled isLoading={isLoading} viewPort={viewPort}>
      {isEditMode && open === "product-image" && (
        <Stack direction="row" className="edit-btn" spacing={0.5}>
          <Box className="title-top">
            <ReactSvg
              name="image-add"
              width={15}
              height={15}
              sx={{
                transform: "translate(0, 1px)",
              }}
            />
            Image Avec texte
          </Box>
          <Box className="setting-btn">
            <ReactSvg
              name="setting"
              width={12}
              height={12}
              sx={{ "& > div": { display: "flex" } }}
            />
          </Box>
        </Stack>
      )}
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={viewPort === "desktop" ? 6 : 12}
          >
            <ImageCarousel
              isLoading={isLoading}
              onClick={onClick}
              open={open}
              isEditMode={isEditMode}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={viewPort === "desktop" ? 6 : 12}
          >
            <ProductSummary
              isLoading={isLoading}
              viewPort={viewPort}
              onClick={onClick}
              open={open}
            />
          </Grid>
        </Grid>
        <Brands
          isLoading={isLoading}
          onClick={onClick}
          open={open}
          viewPort={viewPort}
        />
        {/* <CustomerProducts isLoading={isLoading} />
        <Banner isLoading={isLoading} />
        <Blog isLoading={isLoading} />
        <Offers isLoading={isLoading} />
        <AboutUs isLoading={isLoading} /> */}
      </CardContent>
    </RootStyled>
  );
}
