import React from "react";
// material
import { CardContent } from "@mui/material";
// components
import RootStyled from "./styled";
import { AddProductForm } from "components";

export default function EditProductCard({ isLoading }) {
  return (
    <RootStyled isLoading={isLoading}>
      <CardContent>
        <AddProductForm isLoading={isLoading} />
      </CardContent>
    </RootStyled>
  );
}
