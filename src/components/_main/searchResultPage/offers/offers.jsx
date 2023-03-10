import React from "react";
// material
import { Box, Skeleton, Stack, Typography } from "@mui/material";
// utils
import ReactSVG from "utils/reactSVG";
// components
import RootStyled from "./styled";

const data = ["deliver", "truck", "vegan", "cruetly"];

export default function Offers({ isLoading }) {
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
            {isLoading ? (
              <Skeleton
                variant="circular"
                className="skeleton-circular"
                width={80}
                height={102}
              />
            ) : (
              <Box className="circle-card">
                <ReactSVG name={v} width="47px" height="47px" />
              </Box>
            )}
            <Typography
              variant="body1"
              textAlign="center"
              lineHeight={1}
              fontWeight={600}
            >
              {isLoading ? (
                <>
                  <Skeleton variant="text" width={80} />
                </>
              ) : (
                "Fast & Secure  Delivery"
              )}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </RootStyled>
  );
}
