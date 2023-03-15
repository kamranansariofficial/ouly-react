import React from "react";
// material
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
// components
import RootStyled from "./styled";

const data = [
  {
    img: "product-img",
    name: "CURLISTA Pro 5 IN 1",
  },
  {
    img: "select-img1",
    name: "Product 1",
  },
  {
    img: "select-img3",
    name: "Product 2",
  },
  {
    img: "product-img",
    name: "Product 3",
  },
  {
    img: "select-img1",
    name: "Product 4",
  },
  {
    img: "select-img3",
    name: "Product 5",
  },
];

export default function ChooseProduct({ handleClose }) {
  const [active, setactive] = React.useState(null);
  return (
    <RootStyled>
      <Typography variant="h4" textAlign="center" mt={4} mb={3}>
        Choose Your Product
      </Typography>
      <Divider />
      <Box className="grid-display" p={4}>
        {data.map((v, i) => (
          <Stack key={i} spacing={1}>
            <Box
              position="relative"
              className={`img-sec ${i == active && "active"}`}
              onClick={() => setactive(i)}
            >
              <img
                src={`/static/images/${v.img}.png`}
                height={117}
                width="100%"
                alt="table product-img"
              />
              <Box className="img-icon">
                <CheckCircleRoundedIcon />
              </Box>
            </Box>
            <Typography variant="subtitle1">{v.name}</Typography>
          </Stack>
        ))}
      </Box>
      <Divider />
      <Stack direction="row" spacing={3} my={3} mx={4}>
        <Button variant="outlined" size="large" onClick={handleClose} fullWidth>
          cancel
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={handleClose}
          fullWidth
        >
          confrim
        </Button>
      </Stack>
    </RootStyled>
  );
}
