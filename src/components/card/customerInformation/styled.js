// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme }) => ({
  "& .avatar-sec": {
    padding: theme.spacing(4),
    background: theme.palette.background.neutral,
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
