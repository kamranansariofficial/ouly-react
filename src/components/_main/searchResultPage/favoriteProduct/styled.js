import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme, isLoading }) => ({
  "& .skeleton-h4": {
    display: "flex",
    margin: "0 auto 16px auto",
  },
  "& .skeleton-stack": {
    display: "flex",
    margin: "0px auto 8px auto",
  },
}));
export default RootStyled;
