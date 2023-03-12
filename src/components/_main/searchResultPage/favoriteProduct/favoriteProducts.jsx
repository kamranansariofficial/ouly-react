import React from "react";
// components
import RootStyled from "./styled";
// material
import { Grid, Typography, Rating, Box, Skeleton, Stack } from "@mui/material";

export default function CustomerProducts({ isLoading }) {
  return (
    <RootStyled isLoading={isLoading}>
      {isLoading ? (
        <>
          <Skeleton
            className="skeleton-h4"
            variant="rounded"
            width="251px"
            height="36px"
          />
          <Grid container spacing={2}>
            {[1, 2, 3].map((v) => (
              <Grid key={v} sm={4} lg={4}>
                <Stack spacing={1}>
                  <Skeleton
                    variant="rounded"
                    className="skeleton-stack"
                    width="181px"
                    height="191px"
                  />
                  <Skeleton
                    variant="rounded"
                    className="skeleton-stack"
                    width="123px"
                    height="18px"
                  />
                  <Skeleton
                    variant="rounded"
                    className="skeleton-stack"
                    width="90px"
                    height="18px"
                  />
                  <Skeleton
                    variant="rounded"
                    className="skeleton-stack"
                    width="52px"
                    height="22px"
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Typography
            variant="h4"
            color="text.primary"
            fontSize="26px"
            textAlign="center"
            mb={2}
          >
            Most loved by Customer
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map((v) => (
              <Grid key={v} item lg={4}>
                <Box textAlign={"center"}>
                  <img
                    src="/static/images/product-card.png"
                    alt="product-card"
                  />
                  <Typography
                    variant="body1"
                    color="text.primary"
                    fontSize="15px"
                  >
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
        </>
      )}
    </RootStyled>
  );
}
