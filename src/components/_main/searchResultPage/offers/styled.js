import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  margin: theme.spacing(5, 0),
  "& .circle-card": {
    height: "102px",
    width: "80px",
    boxShadow: " 2.51603px 2.51603px 15.0962px rgba(0, 0, 0, 0.04)",
    border: "0.943512px solid #F3F2FF",
    borderRadius: "57.0467px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
export default RootStyled;
