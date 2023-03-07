import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  maxWidth: 950,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "0 auto",
}));
export default RootStyled;
