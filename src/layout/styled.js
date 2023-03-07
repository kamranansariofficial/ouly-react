import { alpha, styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  display: "flex",
  "& .toolbar": {
    minHeight: 88,
  },
}));

export default RootStyled;
