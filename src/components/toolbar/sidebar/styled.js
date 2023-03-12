import { alpha, styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";

const RootStyled = styled(Drawer)(({ theme }) => ({
  width: 280,
  flexShrink: 0,
  position: "relative",
  overflow: "hidden",
  [`& .MuiDrawer-paper`]: {
    width: 280,
    boxSizing: "border-box",
    padding: "22px",
  },
  "& .MuiAccordion-root": {
    marginTop: 0,
    boxShadow: "none",
    "& .MuiAccordionSummary-root": {
      minHeight: 48,
      flexDirection: "row-reverse",
      "& .MuiAccordionSummary-content": {
        margin: theme.spacing(1, 0),
      },
      "& .MuiAccordionSummary-expandIconWrapper": {
        "&.Mui-expanded": {
          transform: "rotate(90deg)",
        },
      },
    },
  },
}));

export default RootStyled;
