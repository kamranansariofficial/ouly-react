import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

const RootStyled = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
  [`& .MuiDrawer-paper`]: {
    width: 280,
    boxSizing: "border-box",
    padding: "24px",
    boxShadow: "none",
  },
  "& .MuiBackdrop-root": {
    display: "none",
  },
}));

export default RootStyled;
