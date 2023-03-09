import { Button, Stack, Typography, Box } from "@mui/material";
import React from "react";
// components
import RootStyled from "./styled";

export default function Banner() {
  return (
    <RootStyled>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack spacing={1} pl={3}>
          <Typography variant="h4" color="text.primary" mb={0}>
            Discover our summer promotions
          </Typography>
          <Typography variant="body2" color="text.primary">
            The free sample with any order when you <br /> spend $50.
          </Typography>
          <Box pt={1} className="view-all-btn">
            <Button variant="contained" size="medium">
              View All
            </Button>
          </Box>
        </Stack>
        <Box className="background-img">
          <img
            src="/static/images/envelop.png"
            className="img-position"
            alt="envelop"
          />
          <img src="/static/images/ellipse.png" alt="ellipse" />
        </Box>
      </Stack>
    </RootStyled>
  );
}
