import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: 1,
  "& .color-stack": {
    marginBottom: theme.spacing(1),
    fontSize: "14px",
    color: "#1C2B4B",
  },
  "& .color-heading": {
    fontSize: "14px",
    color: "#1C2B4B",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
  },
  "& .color-field": {
    width: 63,
    input: {
      padding: 0,
    },
  },
  "& .chrome-picker ": {
    width: "192px !important",
    boxShadow: "none !important",
    borderRadius: "12px !important",
    "& > div:first-child": {
      borderRadius: "12px !important",
    },
    "& > div:last-child": {
      display: "none",
    },
  },
  "& .hue-picker ": {
    width: "192px !important",
    height: "6px !important",
    "& > div > div> div> div": {
      width: "10px !important",
      height: "10px !important",
      transform: " translate(-9px, -2px) !important",
      border: "1px solid #fff !important",
      background: "#fff0 !important",
    },
  },
  "& .MuiButtonBase-root": {
    textTransform: "capitalize",
    borderRadius: "8px",
    boxShadow: "none !important",
  },
}));
export default RootStyled;
