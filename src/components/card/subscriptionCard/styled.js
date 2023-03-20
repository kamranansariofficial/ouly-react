// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme, value }) => ({
  border: value.label
    ? `2px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.palette.divider}`,
  "& .MuiChip-root": {
    display: "flex",
    marginLeft: "auto",
    maxWidth: "fit-content",
    background: " rgba(37, 99, 235, 0.2)",
    color: theme.palette.primary.main,
    fontWeight: 600,
  },
  "& .subscription-list": {
    paddingTop: theme.spacing(3),
    paddingBottom: value.label ? theme.spacing(4) : theme.spacing(3),
    "& .MuiListItem-root": {
      paddingBottom: theme.spacing(1.3),
      "& .MuiListItemIcon-root": {
        minWidth: 20,
        svg: {
          height: 10,
          width: 10,
          fill: "#232859",
        },
      },
      "& .MuiListItemText-root": {
        margin: 0,
        color: "#232859",
      },
    },
  },
}));
export default RootStyled;
