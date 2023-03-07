import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  zIndex: 0,
  "&::before": {
    content: `''`,
    background: "url(/static/img/wave.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
  },
  "& .select-main": {
    position: "relative",
    zIndex: 2,
    width: "100%",
    "& .country-select": {
      cursor: "pointer",
      position: "relative",
      display: "flex",
      gap: 1,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      alignItems: "center",
      width: "100%",
      height: "52px",
      background: " rgba(243, 242, 255, 0.5)",
      border: " 1px solid rgba(99, 91, 255, 0.12)",
      borderRadius: " 12px",
      "& .country-label": {
        flexGrow: 1,
        width: 24,
        position: "absolute",
        right: 12,
        top: 12,
        zIndex: 1,
      },
    },
  },
}));
export default RootStyled;
