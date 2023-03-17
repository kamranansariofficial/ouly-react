import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .stack-links": {
    button: {
      minWidth: "170px",
    },
  },
  "& .option-style": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(3),
    transition: theme.transitions.create("all"),
    border: `solid 1px ${theme.palette.grey[500_32]}`,
    "& .MuiIconButton-sizeSmall": {
      borderRadius: "8px",
      border: `1px solid ${theme.palette.divider}`,
      height: 34,
      width: 34,
    },
    "& .MuiFormControlLabel-root": {
      "& .MuiRadio-root": {
        padding: 0,
      },
    },
    "& .MuiChip-label": {
      color: "#005E54",
    },
  },

  [theme.breakpoints.up("md")]: {
    padding: 0,
  },
}));
export default RootStyled;
