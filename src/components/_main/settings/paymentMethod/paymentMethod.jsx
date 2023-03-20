import { useState } from "react";
// material
import {
  Stack,
  Paper,
  Radio,
  Button,
  Chip,
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
// utils
import ReactSvg from "utils/reactSVG";
// components
import { AlertDialog, CreditCard } from "components";
import RootStyled from "./styled";

// ----------------------------------------------------------------------

const PAYMENT_OPTIONS = [
  {
    value: "paypal",
    title: "Visa **** 4242",
    icons: "visa",
    chip: "Primary",
    expire: "Expires 12/20",
    update: "Last updated on 22 Aug 2022",
  },
  {
    value: "credit_card",
    title: "DISCOVER **** 3424",
    icons: "discover",
    expire: "Expires 12/20",
    update: "Last updated on 22 Aug 2022",
  },
];

// ----------------------------------------------------------------------

export default function PaymentMethods() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <RootStyled>
      <Typography variant="h5">Payment Method</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        The default payment method will be used for any biling purposes.
      </Typography>

      <RadioGroup>
        <Stack spacing={2}>
          {PAYMENT_OPTIONS.map((method) => {
            const { value, title, icons, expire, update, chip } = method;
            return (
              <Paper className="option-style" key={Math.random()}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <ReactSvg name={icons} height={32} width={48} />
                  <Stack spacing={0}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="subtitle2">{title}</Typography>
                      {chip && <Chip label={chip} size="small" />}
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="body2" color="text.secondary">
                        {expire}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        .
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {update}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={3}>
                  <IconButton size="small">
                    <MoreHorizOutlinedIcon />
                  </IconButton>
                  <FormControlLabel value={value} control={<Radio />} />
                </Stack>
              </Paper>
            );
          })}
          <Stack spacing={3} className="stack-links">
            <Box>
              <Button variant="text" size="small" onClick={handleClickOpen}>
                + Add a New Payment Method
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                type="button"
                size="large"
                sx={{ my: 3 }}
              >
                confrim
              </Button>
            </Box>
          </Stack>
        </Stack>
      </RadioGroup>
      <AlertDialog
        open={open}
        handleClose={handleClose}
        sx={{ "& .MuiPaper-root": { width: "605px" } }}
      >
        <CreditCard handleClose={handleClose} />
      </AlertDialog>
    </RootStyled>
  );
}
