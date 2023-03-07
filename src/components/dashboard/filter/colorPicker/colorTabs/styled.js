import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .MuiTabs-root": {
    minHeight: 0,
    "& .MuiTabs-scroller": {
      "& .MuiTabs-flexContainer": {
        "& .MuiButtonBase-root": {
          height: 42,
          minWidth: 42,
          minHeight: 42,
          borderRadius: "8px",
          background: "#000",
          marginRight: theme.spacing(1),
          "&.aqua": {
            background: "#2DD4BF",
          },
          "&.primary-dark": {
            background: "#1E40AF",
          },
          "&.primary": {
            background: theme.palette.primary.main,
          },
          "&.Mui-selected": {
            border: "2px solid #2563EB !important",
          },
        },
      },
      span: {
        display: "none",
      },
    },
  },
}));
export default RootStyled;
