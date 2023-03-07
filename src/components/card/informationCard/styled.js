// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme }) => ({
  "& .MuiCardContent-root ": {
    padding: theme.spacing(4),
    "& .square-img": {
      "&:after": {
        content: '""',
        display: "block",
        paddingBottom: "100%",
      },
      "& img": {
        position: "absolute",
        objectFit: "cover",
        objectPosition: " 50% 50%",
      },
    },
  },
}));
export default RootStyled;
