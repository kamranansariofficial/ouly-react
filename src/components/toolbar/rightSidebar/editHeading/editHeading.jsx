import React from "react";
// material
import { Stack, TextField, Typography } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// components
import RootStyled from "./styled";

export default function EditHeading() {
  const [value, setValue] = React.useState("");
  return (
    <RootStyled spacing={3}>
      <Stack spacing={1}>
        <Typography variant="body1" fontSize={14} fontWeight={500}>
          Title
        </Typography>
        <TextField
          variant="outlined"
          defaultValue="CURLISTA Pro 5 IN 1"
          size="small"
        />
      </Stack>
      <Stack spacing={1}>
        <Typography variant="body1" fontSize={14} fontWeight={500}>
          Subtitle
        </Typography>
        <TextField
          variant="outlined"
          defaultValue="CURLISTA Pro 5 IN 1"
          size="small"
        />
      </Stack>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </RootStyled>
  );
}
