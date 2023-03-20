import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// material
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  IconButton,
  Skeleton,
} from "@mui/material";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
// components
import { Select } from "components";
import RootStyled from "./styled";
// utils
import ReactSvg from "utils/reactSVG";

const data = ["Physical", "Digital", "Physical"];
const types = ["Physical", "Digital"];

export default function EditProductForm({ isLoading }) {
  const inputElt = useRef(null);
  const [value, setValue] = useState("");
  // const [state, setState] = useState(true);
  const navigate = useNavigate();
  return (
    <RootStyled isLoading={isLoading}>
      {[1, 2].map((v) => (
        <Card key={v} className="paper-card">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item lg={4}>
                <Stack spacing={1}>
                  <Typography variant="body1" fontWeight={600}>
                    {isLoading ? (
                      <Skeleton variant="text" width={22} />
                    ) : (
                      "Tone"
                    )}
                  </Typography>
                  {isLoading ? (
                    <Skeleton variant="rounded" height={52} width={"100%"} />
                  ) : (
                    <Select data={data} label="Defult" />
                  )}
                </Stack>
              </Grid>
              <Grid item lg={4}>
                <Stack spacing={1}>
                  <Typography variant="body1" fontWeight={600}>
                    {isLoading ? (
                      <Skeleton variant="text" width={87} />
                    ) : (
                      "Writing Style"
                    )}
                  </Typography>
                  {isLoading ? (
                    <Skeleton variant="rounded" height={52} width={"100%"} />
                  ) : (
                    <Select data={types} label="Defult" />
                  )}
                </Stack>
              </Grid>
              <Grid item lg={12}>
                {isLoading ? (
                  <Skeleton variant="rounded" height={124} width={"100%"} />
                ) : (
                  <Box position={"relative"}>
                    <TextField
                      multiline
                      ref={inputElt}
                      className={`describe active `}
                      rows={4}
                      fullWidth
                      autoComplete="describe"
                      type={"text"}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      // InputProps={{
                      //   readOnly: state,
                      // }}
                    />
                    <Box className="editable-box">
                      <Stack>
                        <IconButton
                          size="small"
                          // onClick={() => setState(false)}
                        >
                          <ReactSvg name="sparkles" width="9px" height={11} />
                        </IconButton>

                        <IconButton size="small">
                          <ReactSvg name="replace" width="9px" height={11} />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                )}
              </Grid>
            </Grid>
            {value && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="end"
                spacing={2}
                mt={3}
              >
                <Button
                  variant="text"
                  color="error"
                  size="small"
                  onClick={(e) => setValue(e.target.value)}
                >
                  cancel
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  startIcon={<DoneRoundedIcon />}
                >
                  Keep
                </Button>
              </Stack>
            )}
          </CardContent>
        </Card>
      ))}
      <Box className="width-box" ml="auto">
        <Stack spacing={3} direction="row">
          {isLoading ? (
            <Skeleton variant="rounded" width="100%" height={48} />
          ) : (
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => navigate("/customer-information")}
              fullWidth
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
              onClick={() => navigate("/advantages-product")}
              fullWidth
            >
              continue
            </Button>
          )}
        </Stack>
      </Box>
    </RootStyled>
  );
}
