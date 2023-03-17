import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .loading-btn": {
    button: {
      minWidth: 170,
      marginTop: theme.spacing(4),
    },
  },
}));
export default RootStyled;
