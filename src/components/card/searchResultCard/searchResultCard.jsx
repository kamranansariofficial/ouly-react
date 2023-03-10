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

export default function SearchResultCard({ isLoading }) {
  return (
    <RootStyled isLoading={isLoading}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item md={12} lg={6}>
            <ImageCarousel isLoading={isLoading} />
          </Grid>
          <Grid item md={12} lg={6}>
            <ProductSummary isLoading={isLoading} />
          </Grid>
        </Grid>
        <Brands isLoading={isLoading} />
        <CustomerProducts isLoading={isLoading} />
        <Banner isLoading={isLoading} />
        <Blog isLoading={isLoading} />
        <Offers isLoading={isLoading} />
        <AboutUs isLoading={isLoading} />
      </CardContent>
    </RootStyled>
  );
}
