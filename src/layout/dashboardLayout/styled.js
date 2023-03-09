import { alpha, styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  display: "flex",
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  "& .toolbar": {
    minHeight: 88,
  },
}));

export default RootStyled;
