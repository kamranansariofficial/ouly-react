// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme, isLoading }) => ({
  background: isLoading ? "transparent" : theme.palette.background.paper,
  boxShadow: isLoading ? "none" : "auto",
  "& .avatar-sec": {
    padding: theme.spacing(4),
    background: isLoading ? "transparent" : theme.palette.background.neutral,
    "& .avatar-img": {
      width: 76,
      height: 76,
    },
  },
  "& .information": {
    padding: theme.spacing(4),
    "& .width-box": {
      width: "50%",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
  },
}));
export default RootStyled;
