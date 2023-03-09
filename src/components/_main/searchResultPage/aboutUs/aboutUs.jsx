import React from "react";
// material
import { Grid, Typography, Stack, Button, Box } from "@mui/material";
// components
import RootStyled from "./styled";

export default function AboutUs() {
  return (
    <RootStyled>
      <Typography
        variant="h4"
        color="text.primary"
        fontSize="26px"
        textAlign="center"
        mb={1.5}
        pt={1.5}
      >
        About Us
      </Typography>
      <Grid container alignItems="center" spacing={0}>
        <Grid item md={6}>
          <Stack spacing={1} pl={5} pr={2}>
            <Typography variant="h4" color="text.primary" fontSize={20} mb={0}>
              Naturals organic skin creams for face & body
            </Typography>
            <Typography variant="body2" fontSize={12} color="text.primary">
              our skin is the largest part of our body needs constants and
              miniaturization to achieve a healthy glow. first skin healthy -
              looking skin is maintaining an internal regimen moisturized and
              blemish free.
            </Typography>
            <Box pt={1} className="view-all-btn">
              <Button variant="contained" size="medium" sx={{ px: 4 }}>
                Buy Now
              </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item md={6}>
          <img
            src="/static/images/product-img1.png"
            alt="product-img"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item md={6}>
          <img
            src="/static/images/product-img1.png"
            alt="product-img"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item md={6}>
          <Stack spacing={1} pl={5} pr={2}>
            <Typography variant="h4" color="text.primary" fontSize={20} mb={0}>
              Naturals organic skin creams for face & body
            </Typography>
            <Typography variant="body2" fontSize={12} color="text.primary">
              our skin is the largest part of our body needs constants and
              miniaturization to achieve a healthy glow. first skin healthy -
              looking skin is maintaining an internal regimen moisturized and
              blemish free.
            </Typography>
            <Box pt={1} className="view-all-btn">
              <Button variant="contained" size="medium" sx={{ px: 4 }}>
                Buy Now
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </RootStyled>
  );
}
