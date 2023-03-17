import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .MuiInputBase-root": {
    background: theme.palette.background.paper,
  },
  "& .dialog-footer": {
    background: "#FBFBFB",
  },
  "& .MuiButton-startIcon ": {
    "&>div>div": {
      display: "flex",
    },
  },
}));
export default RootStyled;
