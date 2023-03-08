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
