// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme }) => ({
  maxWidth: 874,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "32px auto 0",
  position: "relative",
  "& .MuiCardContent-root": {
    padding: theme.spacing(2, 6, 11, 6),
    img: {
      objectFit: "contain",
    },
    "& .iphone": {
      transform: "translate(7%,7%)",
    },
    "& .cancel-btn": {
      position: "absolute",
      right: 10,
      top: 10,
    },
    "& .detail": {
      background: theme.palette.background.paper,
      width: "100%",
      position: "absolute",
      left: 0,
      bottom: 0,
      padding: theme.spacing(3),
    },
    "& .icon-btn": {
      height: 34,
      width: 34,
      border: " 0.725415px solid #6B7280",
      borderRadius: "8px",
    },
    "& .contained-btn": {
      minWidth: 144,
      height: 34,
    },
  },
}));

export default RootStyled;
