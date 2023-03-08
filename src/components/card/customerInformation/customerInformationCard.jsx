import React from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// material
import {
  Avatar,
  Box,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
  Button,
} from "@mui/material";
// components
import ReactSVG from "utils/reactSVG";
import RootStyled from "./styled";
import { data, data2, data3, colorData } from "./config";

export default function CustomerInformationCard() {
  const navigate = useNavigate();
  return (
    <RootStyled>
      <CardContent className="avatar-sec">
        <Stack spacing={2.5} direction="row" alignItems="center" ml={2}>
          <Avatar
            src="/static/images/avatar.png"
            alt="avatar"
            className="avatar-img"
          />
          <Stack spacing={0}>
            <Typography variant="h4" fontWeight={600} color="text.primary">
              Claire
            </Typography>
            <Typography variant="h5" fontWeight={400} color="text.primary">
              Cosmetic Product
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
      <CardContent className="information">
        <Box px={2} pb={3}>
          <Grid container spacing={2}>
            {data.map((v, i) => (
              <Grid key={Math.random()} item sm={12} md={4}>
                <Stack spacing={2.5} direction="row" alignItems="center">
                  <ReactSVG name={v.icon} />
                  <Stack spacing={0}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight={1.5}
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      color="text.primary"
                    >
                      {v.detail}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider />
        <Box px={2} py={3}>
          <Grid container spacing={2}>
            {data2.map((v, i) => (
              <Grid key={Math.random()} item sm={12} md={6}>
                <Stack spacing={2.5} direction="row" alignItems="center">
                  <ReactSVG name={v.icon} />
                  <Stack spacing={0}>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      lineHeight={1.5}
                    >
                      {v.title}
                    </Typography>
                    <Typography
                      variant="h5"
                      fontWeight={400}
                      color="text.primary"
                    >
                      {v.detail}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider />
        {data3.map((v, i) => (
          <Box key={Math.random()}>
            <Stack px={2} py={3}>
              <Stack spacing={2.5} direction="row" alignItems="center">
                <ReactSVG name={v.icon} />
                <Stack spacing={0}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    lineHeight={1.5}
                  >
                    {v.title}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={400}
                    color="text.primary"
                  >
                    {v.detail}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Divider />
          </Box>
        ))}
        <Box px={2} py={3}>
          <Grid container spacing={2}>
            {colorData.map((v, i) => (
              <Grid item xs={4} md={2}>
                <Stack spacing={1}>
                  <Box
                    sx={{
                      height: 24,
                      width: 24,
                      bgcolor: v.color,
                      cursor: "pointer",
                      borderRadius: "4px",
                      border: i === 0 ? "1px solid rgba(0, 0, 0, 0.2)" : "",
                    }}
                  ></Box>
                  <Typography variant="body2">{v.title}</Typography>
                  <Typography
                    variant="body2"
                    lineHeight={1}
                    color="text.secondary"
                  >
                    {v.color}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider />
        <Box className="width-box" px={2} pt={3} ml="auto">
          <Stack spacing={3} direction="row">
            <Button variant="outlined" size="large" color="secondary" fullWidth>
              Back
            </Button>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate("/edit-product")}
              fullWidth
            >
              continue
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </RootStyled>
  );
}
