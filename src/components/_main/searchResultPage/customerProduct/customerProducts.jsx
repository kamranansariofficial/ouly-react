import React from "react";
// components
import RootStyled from "./styled";
// material
import { Grid, Typography, Rating, Box } from "@mui/material";

export default function CustomerProducts() {
  return (
    <RootStyled>
      <Typography
        variant="h4"
        color="text.primary"
        fontSize="26px"
        textAlign="center"
        mb={2}
      >
        Blog
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((v) => (
          <Grid key={v} item lg={4}>
            <Box textAlign={"center"}>
              <img src="/static/images/product-card.png" alt="product-card" />
              <Typography variant="body1" color="text.primary" fontSize="15px">
                Antiaging Shampoo
              </Typography>
              <Rating name="size-small" defaultValue={5} size="small" />
              <Typography
                variant="h6"
                color="text.primary"
                mt={-0.5}
                fontWeight={700}
              >
                $44.00
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </RootStyled>
  );
}
