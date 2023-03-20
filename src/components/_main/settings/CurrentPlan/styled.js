import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .current-plan-card": {
    padding: theme.spacing(3),
    "& .feature-link": {
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.primary,
      paddingTop: theme.spacing(2),
      fontWeight: 600,
      svg: {
        marginRight: theme.spacing(1),
      },
    },
  },
}));
export default RootStyled;
