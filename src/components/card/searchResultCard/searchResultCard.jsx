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

export default function SearchResultCard({ isLoading, viewPort }) {
  return (
    <RootStyled isLoading={isLoading} viewPort={viewPort}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={viewPort === "desktop" ? 6 : 12}
          >
            <ImageCarousel isLoading={isLoading} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={viewPort === "desktop" ? 6 : 12}
          >
            <ProductSummary isLoading={isLoading} viewPort={viewPort} />
          </Grid>
        </Grid>
        {/* <Brands isLoading={isLoading} />
        <CustomerProducts isLoading={isLoading} />
        <Banner isLoading={isLoading} />
        <Blog isLoading={isLoading} />
        <Offers isLoading={isLoading} />
        <AboutUs isLoading={isLoading} /> */}
      </CardContent>
    </RootStyled>
  );
}
