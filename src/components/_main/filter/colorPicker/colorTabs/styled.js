import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  position: "relative",
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
  "& .icon-btn": {
    height: 20,
    width: 20,
    background: "#EFF6FF",
    border: "1px solid #D0D5DD",
    position: "absolute",
    top: -7,
    right: 0,
    svg: {
      height: 10,
      width: 10,
    },
    "&:hover": {
      background: "#EFF6FF",
    },
  },
}));
export default RootStyled;
