import React from "react";
// react router dom
import { useNavigate } from "react-router-dom";
// material
import {
  CardContent,
  Grid,
  Stack,
  Typography,
  TextField,
  InputAdornment,
  Divider,
  Button,
  Box,
  Skeleton,
} from "@mui/material";
// components
import RootStyled from "./styled";

export default function InformationCard({ isLoading }) {
  const navigate = useNavigate();
  return (
    <RootStyled isLoading={isLoading}>
      <CardContent p={4}>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
            <Box className="square-img">
              {isLoading ? (
                <Skeleton variant="rounded" height={437} width="100%" />
              ) : (
                <img src="/static/images/product-img.png" alt="product img" />
              )}
            </Box>
          </Grid>
          <Grid item sm={12} lg={6}>
            <Typography variant="h3" fontWeight={700} mb={3}>
              {isLoading ? (
                <Skeleton variant="text" width={309} />
              ) : (
                "CURLISTA Pro 5 IN 1"
              )}
            </Typography>
            <Stack spacing={1} mb={3}>
              <Typography variant="body1" fontWeight={600}>
                {isLoading ? <Skeleton variant="text" width={34} /> : "Price"}
              </Typography>
              {isLoading ? (
                <Skeleton variant="rounded" width="100%" height={52} />
              ) : (
                <TextField
                  fullWidth
                  autoComplete="number"
                  type="number"
                  placeholder="$ 999"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Stack spacing={1} direction="row">
                          <Typography variant="body1" fontWeight={600}>
                            USD
                          </Typography>
                          <Divider
                            className="hr-column"
                            orientation="vertical"
                            variant="middle"
                            flexItem
                          />
                        </Stack>
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body1" fontWeight={600}>
                {isLoading ? (
                  <Skeleton variant="text" width={82} />
                ) : (
                  "Description"
                )}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {isLoading ? (
                  <>
                    {[1, 2, 3, 4, 5, 6, 7].map((v, i) => (
                      <Skeleton variant="text" width={i === 6 ? 203 : "100%"} />
                    ))}
                  </>
                ) : (
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
                )}
              </Typography>
            </Stack>
            <Stack spacing={3} direction="row">
              {isLoading ? (
                <Skeleton variant="rounded" width="100%" height={48} />
              ) : (
                <Button
                  variant="outlined"
                  size="large"
                  color="secondary"
                  fullWidth
                  onClick={() => navigate("/")}
                >
                  Back
                </Button>
              )}
              {isLoading ? (
                <Skeleton variant="rounded" width="100%" height={48} />
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  fullWidth
                  onClick={() => navigate("/customer-information")}
                >
                  continue
                </Button>
              )}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </RootStyled>
  );
}
