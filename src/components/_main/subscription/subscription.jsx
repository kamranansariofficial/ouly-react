import React from "react";
// material
import { Button, Box, Grid } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
// components
import RootStyled from "./styled";
import { subscriptionData } from "./config";
import { SubscriptionCard } from "components";

export default function Subscription() {
  return (
    <RootStyled>
      <Box className="subscription-btn">
        <Button variant="text" startIcon={<ArrowBackIosNewRoundedIcon />}>
          Subscription Plan
        </Button>
      </Box>
      <Grid container spacing={2}>
        {subscriptionData.map((val, i) => (
          <Grid key={val} item lg={4}>
            <SubscriptionCard value={val} />
          </Grid>
        ))}
      </Grid>
    </RootStyled>
  );
}
