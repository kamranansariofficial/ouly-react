import React from "react";
// material
import TripOriginRoundedIcon from "@mui/icons-material/TripOriginRounded";
import {
  Box,
  ListItemText,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Button,
  IconButton,
  TextField,
  Collapse,
  Skeleton,
} from "@mui/material";
// components
import RootStyled from "./styled";
// utils
import ReactSvg from "utils/reactSVG";

import { useNavigate } from "react-router-dom";

const data = [
  "ALL-IN-ONE DEVICE",
  "FOR ALL HAIR TYPES",
  "INTELLIGENT HEAT CONTROL",
  "EASY TO USE",
  "NO RISK FOR YOUR HAIR",
];

const iconData = [
  "hair-straightener",
  "hair-styling",
  "hair-dryer",
  "comb",
  "comb2",
];

export default function AdvantagesProduct({ isLoading }) {
  const [state, setState] = React.useState(false);
  const [state1, setState1] = React.useState(false);
  const navigate = useNavigate();
  return (
    <RootStyled isLoading={isLoading}>
      <CardContent>
        <Box position={"relative"}>
          <Collapse in={state}>
            <TextField
              multiline
              className={`describe`}
              rows={11}
              fullWidth
              autoComplete="describe"
              type={"text"}
              defaultValue="Text generated by  ouly (Ai)"
              InputProps={{
                readOnly: true,
              }}
            />
          </Collapse>

          <Collapse in={!state}>
            <Box className="card-main">
              <List>
                {data.map((v) => (
                  <ListItem key={v} disablePadding>
                    <ListItemIcon>
                      {isLoading ? (
                        <Skeleton
                          variant="circular"
                          height={17}
                          width={17}
                          sx={{ mb: 2 }}
                        />
                      ) : (
                        <TripOriginRoundedIcon />
                      )}
                    </ListItemIcon>
                    {isLoading ? (
                      <Skeleton
                        variant="text"
                        sx={{ fontSize: 18, mb: 2 }}
                        width={250}
                      />
                    ) : (
                      <ListItemText primary={v} />
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          </Collapse>

          <Box className="editable-box">
            <Stack>
              <IconButton size="small" onClick={() => setState(true)}>
                <ReactSvg name="sparkles" width="9px" height={11} />
              </IconButton>
              <IconButton size="small">
                <ReactSvg name="replace" width="9px" height={11} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <Box className="card-main">
          <Stack
            direction="row"
            justifyContent={"space-around"}
            spacing={2}
            mb={2}
          >
            <Collapse in={state1} orientation="horizontal">
              <TextField
                multiline
                className="card-icon-feild"
                rows={4}
                fullWidth
                autoComplete="describe"
                type={"text"}
                defaultValue="Text generated"
              />
            </Collapse>
            {iconData.map((v) => (
              <>
                <Collapse in={!state1} orientation="horizontal">
                  <>
                    {isLoading ? (
                      <Skeleton variant="rounded" height={157} width={147} />
                    ) : (
                      <Box className="card-icon">
                        <img src={`/static/icons/${v}.svg`} alt="icon-img" />
                      </Box>
                    )}
                  </>
                </Collapse>
              </>
            ))}
          </Stack>
          <Box className="editable-box1">
            <Stack>
              <IconButton size="small" onClick={() => setState1(true)}>
                <ReactSvg name="sparkles" width="9px" height={11} />
              </IconButton>
              <IconButton size="small">
                <ReactSvg name="replace" width="9px" height={11} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
        <Stack spacing={3} direction="row">
          {isLoading ? (
            <Skeleton variant="rounded" width="100%" height={48} />
          ) : (
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              onClick={() => navigate("/edit-product")}
              fullWidth
            >
              back
            </Button>
          )}
          {isLoading ? (
            <Skeleton variant="rounded" width="100%" height={48} />
          ) : (
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => navigate("/editing")}
              fullWidth
            >
              Generate
            </Button>
          )}
        </Stack>
      </CardContent>
    </RootStyled>
  );
}
