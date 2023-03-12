import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

const RootStyled = styled(Card)(({ theme, isLoading, viewPort }) => ({
  maxWidth: viewPort === "desktop" ? 877 : viewPort === "tablet" ? 778 : 390,
  margin: theme.spacing(9, "auto", 3, "auto"),
  background: isLoading ? "transparent" : theme.palette.background.paper,
  boxShadow: isLoading ? "none" : "auto",
  "& .MuiCardContent-root": {
    padding: 32,
  },
}));

export default RootStyled;
