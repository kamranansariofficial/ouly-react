import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";

const RootStyled = styled(Toolbar)(({ theme, isLoading }) => ({
  justifyContent: "end",
  height: 88,
  paddingTop: theme.spacing(2, 5),
  paddingBottom: theme.spacing(2, 5),
  background: isLoading ? "" : theme.palette.background.paper,
  paddingRight: "64px !important",
  borderBottom: isLoading ? "" : "1px solid #EAEEF7",
  boxShadow: isLoading ? "" : " 0px 4px 24px rgba(0, 0, 0, 0.02)",
  "& .action-icon-button": {
    background: "#F0F5FF",
    height: 40,
    width: 40,
    borderRadius: 12,
    "&.active": {
      background: theme.palette.primary.main,
      "&:hover": {
        background: "rgb(25, 69, 164)",
      },
    },
    "& > div": {
      marginTop: -4,
    },
    "&:hover": {
      background: "#F0F5FF",
      opacity: 0.8,
    },
  },
}));

export default RootStyled;
