import React from "react";
// material
import { CardContent } from "@mui/material";
// components
import RootStyled from "./styled";
import { EditProductForm } from "components";

export default function EditProductCard() {
  return (
    <RootStyled>
      <CardContent>
        <EditProductForm />
      </CardContent>
    </RootStyled>
  );
}
