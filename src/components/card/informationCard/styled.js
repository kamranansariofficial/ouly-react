// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme, isLoading }) => ({
  background: isLoading ? "transparent" : theme.palette.background.paper,
  boxShadow: isLoading ? "none" : "auto",
  "& .MuiCardContent-root ": {
    padding: theme.spacing(4),
    "& .hr-column": {
      height: "15px",
      display: "flex",
      marginTop: "auto",
      marginBottom: "auto",
    },
  },
}));
export default RootStyled;
