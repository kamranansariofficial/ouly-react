import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .gradient": {
    backgroundImage:
      "linear-gradient(to bottom right,#635BFF,#5BFF62,#DEFF5B,#FFB45B,#FF5BE5,#FF5B82,#635BFF,#7CFF5B)",
    padding: theme.spacing(1),
    width: "auto",
    maxWidth: "58px",
    borderRadius: "12px",
    "& .MuiButtonBase-root": {
      borderRadius: "8px",
      boxShadow: "none !important",
      padding: theme.spacing(0),
      height: 42,
      minWidth: 42,
      background: "#fff",
      color: theme.palette.primary.main,
    },
  },
}));
export default RootStyled;
