import React, { useState } from "react";
// material
import {
  Stack,
  Typography,
  Chip,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import ReactSVG from "utils/reactSVG";

// components
import RootStyled from "./styled";
import { SizeSinglePicker } from "components";
const companyLogo = [
  "airbnb",
  "hubspot",
  "google",
  "microsoft",
  "walmart",
  "fedex",
];
const data = [
  {
    icon: "hair-straightener",
    title: "ALL-IN-ONE DEVICE",
  },
  {
    icon: "hair-styling",
    title: "FOR ALL HAIR TYPES",
  },
  {
    icon: "hair-dryer",
    title: "INTELLIGENT HEAT CONTROL",
  },
  {
    icon: "comb",
    title: "EASY TO USE",
  },
  {
    icon: "comb2",
    title: "NO RISK FOR YOUR HAIR",
  },
];

const Incrementer = () => {
  const [value, setValue] = useState(0);

  const incrementQuantity = () => {
    setValue(value + 1);
  };
  const decrementQuantity = () => {
    setValue(value - 1);
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className="incrementer"
    >
      <IconButton
        size="small"
        color="inherit"
        disabled={value <= 0}
        onClick={decrementQuantity}
      >
        <RemoveRoundedIcon />
      </IconButton>
      <Typography variant="body2" component="span" className="text">
        {value}
      </Typography>
      <IconButton size="small" color="inherit" onClick={incrementQuantity}>
        <AddRoundedIcon />
      </IconButton>
    </Stack>
  );
};

export default function ProductSummary() {
  return (
    <RootStyled>
      <Stack spacing={0.5}>
        <Typography variant="body2">CURLISTAR</Typography>
        <Typography variant="h5">CURLISTA Pro 5 IN 1</Typography>
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Typography variant="body1">
            <del>$199.99 USD</del>
          </Typography>
          <Typography variant="body1">$99.99 USD</Typography>
          <Chip className="chip" label="- 40%" />
        </Stack>
      </Stack>
      <List className="list">
        {data.map((v, i) => (
          <ListItem
            key={v}
            disablePadding
            className={i === 0 ? "border-top" : i === 4 && "border-bottom"}
          >
            <ListItemIcon>
              <ReactSVG name={v.icon} width={18} height={18} />
            </ListItemIcon>
            <ListItemText primary={v.title} />
          </ListItem>
        ))}
      </List>
      <Stack spacing={0.5} mt={2}>
        <Typography variant="body2" color="text.primary" fontWeight={600}>
          Color
        </Typography>
        <SizeSinglePicker />
      </Stack>
      <Stack spacing={2}>
        <Stack spacing={1} mt={2}>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            Quantity
          </Typography>
          <Incrementer />
        </Stack>
        <Button variant="outlined" color="primary" fullWidth>
          add to cart
        </Button>
        <img
          src="/static/images/account.png"
          alt="account-payment"
          width="100%"
          height={30}
        />
      </Stack>
    </RootStyled>
  );
}
