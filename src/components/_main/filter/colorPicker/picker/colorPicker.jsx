import React, { useState } from "react";
// react color
import { HuePicker, ChromePicker } from "react-color";
// material
import { Box, Stack, TextField, Typography, Button } from "@mui/material";
import RootStyled from "./styled";

export default function ColorPicker({ handleClose }) {
  const [color, setColor] = useState("#D76A26");
  return (
    <RootStyled>
      <Stack
        direction="row"
        gap={1}
        className="color-stack"
        alignItems="center"
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            bgcolor: color,
            borderRadius: "5px",
          }}
        />
        Hex
        <TextField
          value={color}
          size="small"
          onChange={(e) => setColor(e.target.value)}
          variant="standard"
          fullWidth
          className="color-field"
        />
      </Stack>
      <ChromePicker color={color} onChange={(col) => setColor(col.hex)} />
      <Typography
        variant="body1"
        onChange={(col) => setColor(col.hex)}
        color="text.primary"
        className="color-heading"
      >
        Hue
      </Typography>
      <HuePicker color={color} onChange={(col) => setColor(col.hex)} />
      <Stack spacing={2} direction="row" mt={2}>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleClose}
          size="medium"
          fullWidth
        >
          cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          size="medium"
          fullWidth
        >
          done
        </Button>
      </Stack>
    </RootStyled>
  );
}
