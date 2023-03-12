import React from "react";
// material
import { Grid, Typography, Rating, Box, Stack, Skeleton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// components
import RootStyled from "./styled";

export default function Blog({ isLoading }) {
  return (
    <RootStyled isLoading={isLoading}>
      <Typography
        variant="h4"
        color="text.primary"
        fontSize="26px"
        textAlign="center"
        mb={1.5}
      >
        {isLoading ? (
          <Skeleton
            variant="text"
            width="47px"
            height={30}
            sx={{ mx: "auto" }}
          />
        ) : (
          "Blog"
        )}
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((v) => (
          <Grid key={v} item sm={6} lg={4}>
            <Box textAlign={"center"}>
              {isLoading ? (
                <Skeleton
                  variant="rounded"
                  className="skeleton-stack"
                  sx={{ mx: "auto", mb: 1 }}
                  width={201}
                  height={193}
                />
              ) : (
                <img src="/static/images/blog-card.png" alt="blog-card" />
              )}

              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
                {isLoading ? (
                  <>
                    <Skeleton variant="text" width={123} sx={{ mx: "auto" }} />
                  </>
                ) : (
                  <>
                    <Typography
                      variant="body1"
                      color="text.primary"
                      fontSize="10px"
                    >
                      Serum
                    </Typography>
                    <FiberManualRecordIcon className="svg-icon" />
                    <Typography
                      variant="body1"
                      color="text.primary"
                      fontSize="10px"
                    >
                      May 2, 2021
                    </Typography>
                  </>
                )}
              </Stack>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize="13px"
                fontWeight={700}
              >
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="text"
                      width="193px"
                      sx={{ mx: "auto" }}
                    />{" "}
                    <Skeleton variant="text" width="80px" sx={{ mx: "auto" }} />
                  </>
                ) : (
                  " An instant answer to all burning & beauty issue"
                )}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </RootStyled>
  );
}
