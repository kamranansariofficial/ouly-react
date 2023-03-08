// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme }) => ({
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
