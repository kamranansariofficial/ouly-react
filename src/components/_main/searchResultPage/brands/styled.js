import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  background: theme.palette.background.neutral,
  padding: theme.spacing(3),
  margin: theme.spacing(3.5, 0),
  "& .MuiStack-root": {
    borderTop: "1px solid #d6e1da",
    borderBottom: "1px solid #d6e1da",
  },
}));
export default RootStyled;
