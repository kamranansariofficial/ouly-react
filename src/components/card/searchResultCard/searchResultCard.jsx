import React from "react";
// material
import { CardContent, Grid } from "@mui/material";
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

export default function SearchResultCard() {
  return (
    <RootStyled>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <ImageCarousel />
          </Grid>
          <Grid item lg={6}>
            <ProductSummary />
          </Grid>
        </Grid>
        <Brands />
        <CustomerProducts />
        <Banner />
        <Blog />
        <Offers />
        <AboutUs />
      </CardContent>
    </RootStyled>
  );
}
