// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme, isLoading }) => ({
  maxWidth: 950,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "0 auto",
  background: isLoading ? "transparent" : theme.palette.background.paper,
  boxShadow: isLoading ? "none" : "auto",
  "& .MuiCardContent-root": {
    padding: theme.spacing(4),
  },
}));
export default RootStyled;
