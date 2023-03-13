import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";

const RootStyled = styled(Toolbar)(({ theme, isLoading, isEdit }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: "fixed",
  width: "100%",
  justifyContent: !isEdit ? "end" : "space-between",
  height: 88,
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  background: isLoading ? "" : theme.palette.background.paper,
  paddingRight: "64px !important",
  paddingLeft: "64px !important",
  borderBottom: isLoading ? "" : "1px solid #EAEEF7",
  boxShadow: isLoading ? "" : " 0px 4px 24px rgba(0, 0, 0, 0.02)",
  "& .action-icon-button": {
    background: "#F0F5FF",
    height: 40,
    width: 40,
    borderRadius: 8,
    "&.active": {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
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
  "& .divider": {
    height: 36,
    marginTop: "auto",
    marginBottom: "auto",
  },
}));

export default RootStyled;
