import React from "react";
// material
import {
  CardContent,
  Grid,
  Stack,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
// components
import RootStyled from "./styled";
import { Popover } from "components";
import ReactSvg from "utils/reactSVG";

export default function ProductViewCard() {
  const [open, setOpen] = React.useState(false);
  const anchorRefFilter = React.useRef(null);
  const onOpenFilter = () => {
    setOpen(!open);
  };
  return (
    <RootStyled>
      <CardContent>
        <IconButton className="cancel-btn">
          <ClearRoundedIcon />
        </IconButton>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <img
              src="/static/images/iPad.png"
              alt="i Pad"
              width="100%"
              height="100%"
            />
          </Grid>
          <Grid item md={4}>
            <img
              src="/static/images/iPhone.png"
              alt="i Phone"
              width="100%"
              height="100%"
              className="iphone"
            />
          </Grid>
        </Grid>
        <Box className="detail" py={3}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack direction="row" alignItems="center" spacing={3}>
              <img src="/static/images/preview.png" alt="preview-img" />
              <Stack spacing={1}>
                <Typography variant="h4">CURLISTA Pro 5 IN 1</Typography>
                <Typography variant="body2" color="text.secondary">
                  Last Edit:<b> Yesterday</b>
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3}>
              <IconButton
                className="icon-btn"
                ref={anchorRefFilter}
                onClick={onOpenFilter}
              >
                <ReactSvg name={"option"} />
              </IconButton>
              <Button
                variant="contained"
                size="small"
                className="contained-btn"
              >
                Download
              </Button>
            </Stack>
          </Stack>
        </Box>
      </CardContent>
      <Popover
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        onClose={() => setOpen(false)}
        anchorEl={anchorRefFilter.current}
        sx={{
          width: "150px",
        }}
      >
        <Stack
          spacing={0}
          p="12px"
          sx={{
            button: {
              fontSize: 14,
              justifyContent: "start",
              color: "text.secondary",
              fontWeight: 400,
            },
          }}
        >
          <Button variant="text" size="small">
            Custom
          </Button>
          <Divider />
          <Button variant="text" size="small">
            View
          </Button>
        </Stack>
      </Popover>
    </RootStyled>
  );
}
