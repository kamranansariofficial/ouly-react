import React from "react";
// material
import { Grid, Typography, Rating, Box, Stack } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
// components
import RootStyled from "./styled";

export default function Blog() {
  return (
    <RootStyled>
      <Typography
        variant="h4"
        color="text.primary"
        fontSize="26px"
        textAlign="center"
        mb={1.5}
      >
        Blog
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3].map((v) => (
          <Grid key={v} item lg={4}>
            <Box textAlign={"center"}>
              <img src="/static/images/blog-card.png" alt="blog-card" />
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={1}
              >
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
              </Stack>
              <Typography
                variant="body1"
                color="text.primary"
                fontSize="13px"
                fontWeight={700}
              >
                An instant answer to all burning <br />& beauty issue
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </RootStyled>
  );
}
