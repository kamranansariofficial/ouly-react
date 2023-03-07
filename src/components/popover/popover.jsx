// material
import { Popover } from "@mui/material";

// ----------------------------------------------------------------------

export default function MenuPopover({ ...props }) {
  const { children, open, sx, width, ...other } = props;
  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      PaperProps={{
        sx: {
          mt: 1.5,
          overflow: "inherit",
          width: width || 225,
          border: "1px solid #EFF1F5",
          boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
          borderRadius: "12px",
          ...sx,
        },
      }}
      open={open}
      {...other}
    >
      {children}
    </Popover>
  );
}
