import React, { useState, useCallback } from "react";
// material
import {
  Stack,
  Typography,
  Button,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
// componets
import RootStyled from "./styled";
import { UploadMultipleFile } from "components";
import ReactSvg from "utils/reactSVG";
const data = ["select-img", "select-img1", "select-img2", "select-img3"];

export default function EditImages() {
  const [active, setactive] = useState(null);
  console.log(active);
  const [upload, setupload] = useState({
    loading: false,
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setupload({ ...upload, loading: true });
      setTimeout(() => {
        const file = acceptedFiles[0];
        if (file) {
          setupload({
            ...file,
            loading: false,
            preview: URL.createObjectURL(file),
          });
        }
      }, 2000);
    },
    [upload]
  );
  return (
    <RootStyled spacing={3}>
      <Stack spacing={2}>
        <Typography variant="h6" fontSize={20}>
          Section Image
        </Typography>
        <Box className="grid-preview">
          {data.map((v, i) => (
            <Box
              position="relative"
              className={`select-img ${v == active && "active"}`}
              onClick={() => setactive(v)}
            >
              <img
                src={`/static/images/${v}.png`}
                height="100%"
                width="100%"
                alt="select-img product-img"
              />
              <Box className="img-icon">
                <CheckCircleRoundedIcon />
              </Box>
            </Box>
          ))}
        </Box>
        <Button variant="outlined" color="primary">
          Auto Generator
        </Button>
      </Stack>
      <Stack spacing={1}>
        <Typography variant="h6" fontSize={20}>
          Manuel image
        </Typography>
        <UploadMultipleFile
          sx={{
            height: "113px",
            bgcolor: "background.paper",
          }}
          preview={upload.preview}
          onDrop={(file) => handleDrop(file)}
          loading={upload.loading}
        />
      </Stack>
      <Stack spacing={1}>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant="h6" fontSize={20}>
            Manuel image
          </Typography>
          <IconButton>
            <ReactSvg name={"edit1"} />
          </IconButton>
        </Stack>
        <TextField multiline rows={4} placeholder="Text Section" />
      </Stack>
    </RootStyled>
  );
}
