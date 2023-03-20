import * as React from "react";
// material
import Dialog from "@mui/material/Dialog";

export default function AlertDialog({ open, handleClose, children, sx }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          ...sx,
        }}
      >
        {children}
      </Dialog>
    </div>
  );
}
