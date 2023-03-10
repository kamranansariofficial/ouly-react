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
  Skeleton,
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

const Incrementer = ({ isLoading }) => {
  const [value, setValue] = useState(0);

  const incrementQuantity = () => {
    setValue(value + 1);
  };
  const decrementQuantity = () => {
    setValue(value - 1);
  };

  return isLoading ? (
    <Skeleton variant="rounded" width={87} height={36} />
  ) : (
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

export default function ProductSummary({ isLoading }) {
  return (
    <RootStyled>
      <Stack spacing={0.5}>
        <Typography variant="body2">
          {isLoading ? <Skeleton variant="text" width={68} /> : "CURLISTAR"}
        </Typography>
        <Typography variant="h5">
          {" "}
          {isLoading ? (
            <Skeleton variant="text" width={174} />
          ) : (
            "CURLISTA Pro 5 IN 1"
          )}
        </Typography>
        <Stack direction={"row"} alignItems="center" spacing={2}>
          <Typography variant="body1">
            {" "}
            {isLoading ? (
              <Skeleton variant="text" width={86} />
            ) : (
              <del>$199.99 USD</del>
            )}
          </Typography>
          <Typography variant="body1" fontWeight={600}>
            {isLoading ? <Skeleton variant="text" width={86} /> : "$199.99 USD"}
          </Typography>
          {isLoading ? (
            <Skeleton variant="rounded" width={60} height={32} />
          ) : (
            <Chip className="chip" label="- 40%" />
          )}
        </Stack>
      </Stack>
      <List className="list">
        {data.map((v, i) => (
          <ListItem
            key={v}
            disablePadding
            className={`${
              i === 0 ? "border-top" : i === 4 && "border-bottom"
            } ${isLoading && "is-loading"}`}
          >
            {isLoading ? (
              <Skeleton variant="rectangular" width="100%" height={32} />
            ) : (
              <>
                <ListItemIcon>
                  <ReactSVG name={v.icon} width={18} height={18} />
                </ListItemIcon>
                <ListItemText primary={v.title} />
              </>
            )}
          </ListItem>
        ))}
      </List>
      <Stack spacing={0.5} mt={2}>
        <Typography variant="body2" color="text.primary" fontWeight={600}>
          {isLoading ? <Skeleton variant="text" width={120} /> : "Color"}
        </Typography>
        <SizeSinglePicker isLoading={isLoading} />
      </Stack>
      <Stack spacing={2}>
        <Stack spacing={1} mt={2}>
          <Typography variant="body2" color="text.primary" fontWeight={600}>
            {isLoading ? <Skeleton variant="text" width={120} /> : "Quantity"}
          </Typography>

          <Incrementer isLoading={isLoading} />
        </Stack>
        {isLoading ? (
          <Skeleton variant="rounded" height={40} width="100%" />
        ) : (
          <Button variant="outlined" color="primary" fullWidth>
            add to cart
          </Button>
        )}
        <Stack direction="row" gap={1}>
          {isLoading ? (
            Array.from(new Array(5)).map((item, index) => (
              <Skeleton variant="rounded" width={67} height={28} />
            ))
          ) : (
            <img
              src="/static/images/account.png"
              alt="account-payment"
              width="100%"
              height={30}
            />
          )}
        </Stack>
      </Stack>
    </RootStyled>
  );
}
