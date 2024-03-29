import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

const RootStyled = styled(Card)(({ theme }) => ({
  maxWidth: 584,
  marginTop: theme.spacing(14),
  width: "100%",
  "& .MuiCardContent-root": {
    padding: theme.spacing(5.2),
    img: {
      margin: theme.spacing(0, "auto", 3),
      display: "block",
    },
  },
  [theme.breakpoints.down("xl")]: {
    marginTop: theme.spacing(10),
  },
}));

export default RootStyled;
