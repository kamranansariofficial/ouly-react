import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme, isLoading }) => ({
  background: isLoading ? "" : "#FBFBFE",
  padding: theme.spacing(3),
  margin: theme.spacing(3.5, 0),
  "& .MuiStack-root": {
    borderTop: "1px solid #f2f5f7",
    borderBottom: "1px solid #f2f5f7",
  },
}));
export default RootStyled;
