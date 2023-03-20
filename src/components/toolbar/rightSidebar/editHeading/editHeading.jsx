import React from "react";
// material
import {
  Button,
  Stack,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
// utils
import ReactSvg from "utils/reactSVG";
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
      <Box className="react-quill-main" position="relative">
        <ReactQuill theme="snow" value={value} onChange={setValue} />
        <Box className="editable-box">
          <Stack>
            <IconButton size="small">
              <ReactSvg name="sparkles" width="9px" height={11} />
            </IconButton>

            <IconButton size="small">
              <ReactSvg name="replace" width="9px" height={11} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Button variant="outlined" color="primary" size="small">
        Generator
      </Button>
    </RootStyled>
  );
}
