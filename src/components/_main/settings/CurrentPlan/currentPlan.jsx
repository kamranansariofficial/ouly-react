import React from "react";
// material
import {
  Button,
  Paper,
  Stack,
  Typography,
  Box,
  Divider,
  Link,
} from "@mui/material";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
// components
import RootStyled from "./styled";

export default function CurrentPlan() {
  return (
    <RootStyled>
      <Stack spacing={2}>
        <Typography variant="h5">Current Plan</Typography>
        <Paper className="current-plan-card">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
          >
            <Stack>
              <Typography variant="h4" color="primary" textAlign="center">
                $ 65.83
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component={"span"}
                >
                  /month
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                Soit 1.67$ par jour
              </Typography>
            </Stack>
            <Box>
              <Button variant="contained" size="large">
                Upgrade Plans
              </Button>
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary" mb={2}>
            This plan will be expire on <b> Aug 22, 2022.</b>
          </Typography>
          <Divider />
          <Link underline="none" className="feature-link">
            <ExpandMoreRoundedIcon /> Features
          </Link>
        </Paper>
      </Stack>
    </RootStyled>
  );
}
