import React from "react";
// material
import { Box, Stack, Typography } from "@mui/material";
// utils
import ReactSVG from "utils/reactSVG";
// components
import RootStyled from "./styled";

const data = ["deliver", "truck", "vegan", "cruetly"];

export default function Offers() {
  return (
    <RootStyled>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        spacing={3}
      >
        {data.map((v) => (
          <Stack key={v} spacing={1}>
            <Box className="circle-card">
              <ReactSVG name={v} width="47px" height="47px" />
            </Box>
            <Typography
              variant="body1"
              textAlign="center"
              lineHeight={1}
              fontWeight={600}
            >
              Fast & Secure <br />
              Delivery
            </Typography>
          </Stack>
        ))}
      </Stack>
    </RootStyled>
  );
}
