import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .MuiTab-textColorPrimary": {
    fontSize: 18,
    fontWeight: 400,
    color: theme.palette.text.primary,
    "&.Mui-selected": {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
  },
  "& .MuiTabs-flexContainer": {
    justifyContent: "center",
  },
}));
export default RootStyled;
