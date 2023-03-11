// material
import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .paper-card": {
    background: theme.palette.background.neutral,
    borderRadius: "8px",
    boxShadow: "none",
    border: "1px solid #EBE8FF",
    marginBottom: theme.spacing(3),
    "& .country-select": {
      background: `${theme.palette.background.paper} !important`,
      border: "1px solid rgba(99, 91, 255, 0.12)",
    },
    "& .describe": {
      "& .MuiOutlinedInput-root": {
        background: theme.palette.background.paper,
        "& .MuiOutlinedInput-notchedOutline": {
          border: "1px solid rgba(99, 91, 255, 0.12)",
        },
      },
      "&.active": {
        "& .MuiOutlinedInput-root": {
          color: "#6B7280",
        },
      },
    },
    "& .editable-box": {
      position: "absolute",
      top: 8,
      right: -23,
      height: "calc(100% - 16px)",
      borderLeft: `2px solid ${theme.palette.primary.main}`,
      "& .MuiButtonBase-root": {
        borderRadius: 0,
        height: 22,
        width: 22,
        marginBottom: theme.spacing(0.2),
        background: theme.palette.primary.main,
        "& >div >div": {
          display: "flex",
        },
      },
    },
  },
  "& .width-box": {
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
}));
export default RootStyled;
