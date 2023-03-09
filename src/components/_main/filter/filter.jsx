import React from "react";
// material
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import { Grid, Stack, Button } from "@mui/material";
// components
import { CheckBoxForm } from "./form";
import { ColorPopover } from "./colorPicker";
import { Select } from "./select";

const RootStyle = styled("div")(({ theme }) => ({
  border: "1px solid #EFF1F5",
  boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
  borderRadius: " 12px",
  padding: "20px",
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  "& .heading": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .close-btn": {
      float: "right",
    },
  },
}));

const countries = [
  "Bahasa Indonesia (Indonesia)",
  "English (India)",
  "Deutsch (Deutschland)",
  "Dansk (Danmark)",
  "English (philippines)",
  "English (US)",
];

const types = ["Physical", "Digital"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Filter({ onClose }) {
  return (
    <RootStyle>
      <Typography variant="h5" color="text.primary" className="heading">
        Filter
        <IconButton
          aria-label="close"
          className="close-btn"
          onClick={() => onClose()}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Typography>
      <Divider />
      <CheckBoxForm />
      <ColorPopover />
      <Select data={countries} isSearch label="Choose a Language" />
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Select data={types} label="Choose a Type" />
        </Grid>
        <Grid item lg={6}>
          <Select data={numbers} label="Choose a Number" />
        </Grid>
      </Grid>
      <Stack spacing={3} direction="row">
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          onClick={() => onClose()}
          fullWidth
        >
          cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => onClose()}
          fullWidth
        >
          apply filter
        </Button>
      </Stack>
    </RootStyle>
  );
}
