import React from "react";
// material
import {
  CardContent,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Chip,
  Button,
} from "@mui/material";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
// components
import RootStyled from "./styled";
import { AlertDialog, Payment, PaymentError } from "components";

export default function SubscriptionCard({ isLoading, value }) {
  const [open, setOpen] = React.useState(false);
  const [success, setsuccess] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenError = () => {
    setOpen(true);
    setsuccess(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <RootStyled value={value}>
      <CardContent>
        {value.label && <Chip label={value.label} size="small" />}
        <Typography variant="h4" textAlign="center">
          {value.title}
        </Typography>
        <Typography variant="h4" color="primary" textAlign="center">
          {value.price}
          <Typography variant="body2" color="text.secondary" component={"span"}>
            {value.subscription}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          mb={3}
        >
          {value.detail}
        </Typography>
        <Divider />
        <List className="subscription-list">
          {value.children.map((val) => (
            <ListItem disablePadding>
              <ListItemIcon>
                {isLoading ? (
                  <Skeleton
                    variant="circular"
                    height={17}
                    width={17}
                    sx={{ mb: 2 }}
                  />
                ) : (
                  <CircleOutlinedIcon />
                )}
              </ListItemIcon>
              {isLoading ? (
                <Skeleton
                  variant="text"
                  sx={{ fontSize: 18, mb: 2 }}
                  width={250}
                />
              ) : (
                <ListItemText primary={val} />
              )}
            </ListItem>
          ))}
        </List>
        {value.label ? (
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={handleClickOpen}
          >
            Selected
          </Button>
        ) : (
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={handleClickOpenError}
          >
            upgrade Now
          </Button>
        )}
        <AlertDialog
          open={open}
          success={success}
          handleClose={handleClose}
          sx={{ "& .MuiPaper-root": { width: "800px", maxWidth: "800px" } }}
        >
          <Payment handleClose={handleClose} success={success} />
        </AlertDialog>
      </CardContent>
    </RootStyled>
  );
}
