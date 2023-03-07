import { alpha, styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

const RootStyled = styled(Drawer)(({ theme }) => ({
  width: 250,
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
  [`& .MuiDrawer-paper`]: {
    width: 250,
    boxSizing: "border-box",
    padding: "22px",
  },
  "& .list-item": {
    borderRadius: "12px",
    "&.active": {
      background: "#EFF6FF",
      color: theme.palette.primary.main,
      svg: {
        color: theme.palette.primary.main,
      },
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: "32px",
  },
  "& .logout-sec": {
    position: "absolute",
    left: 22,
    bottom: 20,
    width: "calc(100% - 48px)",
  },
}));

export default RootStyled;
