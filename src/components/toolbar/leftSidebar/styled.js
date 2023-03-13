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
    padding: "12px",
  },
  "& .MuiAccordion-root": {
    margin: "0 !important",
    boxShadow: "none",
    "& .MuiAccordionSummary-root": {
      minHeight: 32,
      flexDirection: "row-reverse",
      "& .MuiAccordionSummary-content": {
        margin: theme.spacing(0),
      },
      "& .MuiAccordionSummary-expandIconWrapper": {
        "&.Mui-expanded": {
          transform: "rotate(90deg)",
        },
      },
      "&.Mui-expanded": {
        background: "#EFF6FF",
        borderRadius: "8px",
      },
    },

    "& .accordion-summary": {
      "&.Mui-expanded": {
        background: "transparent",
        borderRadius: "8px",
      },
    },
    "&:before": {
      display: "none",
    },
    "& .clickable": {
      cursor: "pointer",
    },
    "& .MuiCollapse-root": {
      "& .MuiAccordionDetails-root": {
        padding: theme.spacing(1, 2),
      },
    },
  },
}));

export default RootStyled;
