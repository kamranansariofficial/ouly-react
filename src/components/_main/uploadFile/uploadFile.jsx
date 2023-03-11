import React, { useState, useCallback } from "react";
// material
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
// components
import { UploadSingleFile } from "components";
// utils
import ReactSVG from "utils/reactSVG";

export default function Upload({ ...props }) {
  const { onClose } = props;
  const [state, setstate] = useState({
    loading: false,
  });

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setstate({ ...state, loading: true });
      setTimeout(() => {
        const file = acceptedFiles[0];
        if (file) {
          setstate({
            ...file,
            loading: false,
            preview: URL.createObjectURL(file),
          });
        }
      }, 2000);
    },
    [state]
  );

  return (
    <Box p={2}>
      <Typography
        variant="h6"
        color="text.primary"
        mb={2}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Upload Image{" "}
        <IconButton
          aria-label="close"
          className="close-btn"
          onClick={() => onClose()}
        >
          <CloseRoundedIcon />
        </IconButton>
      </Typography>
      <UploadSingleFile
        sx={{
          height: 146,
        }}
        preview={state.preview}
        onDrop={(file) => handleDrop(file)}
        loading={state.loading}
      />
    </Box>
  );
}
