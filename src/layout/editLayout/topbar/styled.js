import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

const RootStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  "& .toolbar": {
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.divider}`,
    boxShadow: "none",
    "& .divider": {
      height: 36,
      marginTop: "auto",
      marginBottom: "auto",
    },
    "& .reload-icon-button": {
      "& >div >div": {
        display: "flex",
        alignItems: "center",
      },
    },
    "& .save-btn": {
      paddingLeft: theme.spacing(4.5),
      paddingRight: theme.spacing(4.5),
    },
  },
}));

export default RootStyled;
