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
} from "@mui/material";
// components
import RootStyled from "./styled";
import ReactSVG from "utils/reactSVG";

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

export default function AdvantagesProduct() {
  return (
    <RootStyled>
      <CardContent>
        <Box className="card-main">
          <List>
            {data.map((v) => (
              <ListItem key={v} disablePadding>
                <ListItemIcon>
                  <TripOriginRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={v} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="card-main">
          <Stack direction="row" spacing={2} mb={2}>
            {iconData.map((v) => (
              <Box className="card-icon">
                <img src={`/static/icons/${v}.svg`} alt="icon-img" />
              </Box>
            ))}
          </Stack>
        </Box>
        <Stack spacing={3} direction="row">
          <Button variant="outlined" size="large" color="secondary" fullWidth>
            back
          </Button>
          <Button variant="contained" size="large" color="primary" fullWidth>
            Generate
          </Button>
        </Stack>
      </CardContent>
    </RootStyled>
  );
}
