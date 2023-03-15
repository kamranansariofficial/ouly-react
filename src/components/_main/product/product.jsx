import React from "react";
// material
import { Stack, Typography, Button } from "@mui/material";
// components
import RootStyled from "./styled";
import { AlertDialog, ChooseProduct, ProductTable } from "components";

export default function MainProduct() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <RootStyled>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h5" fontSize="20px">
          Product Generator
        </Typography>
        <Button variant="contained" size="large" onClick={handleClickOpen}>
          +Add Product
        </Button>
      </Stack>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        sx={{ "& .MuiPaper-root": { width: "605px" } }}
      >
        <ChooseProduct handleClose={handleClose} />
      </AlertDialog>
      <ProductTable />
    </RootStyled>
  );
}
