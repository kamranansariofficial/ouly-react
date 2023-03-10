import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme, isLoading }) => ({
  height: 207,
  margin: theme.spacing(3, 0),
  background: isLoading ? "" : theme.palette.background.neutral,
  "& .background-img": {
    position: "relative",
    "& .img-position": {
      position: "absolute",
      top: "6%",
      right: 0,
    },
  },
  "& .view-all-btn": {
    button: {
      background: theme.palette.background.paper,
      color: theme.palette.text.primary,
      fontSize: "10px",
      minWidth: "110px",
    },
  },
}));

export default RootStyled;
