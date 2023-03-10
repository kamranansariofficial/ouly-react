import { styled, alpha } from "@mui/material/styles";
const RootStyled = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  paddingTop: "100%",
  background: theme.palette.background.default,
  borderRadius: 0,
  "& .motion-dev": {
    position: "absolute",
    width: "100%",
    overflow: "hidden",
    top: 0,
  },
  "& .slide-wrapper": {
    position: "relative",
    paddingBottom: "100%",
    zIndex: 11,
    backgroundColor: "transparent",
    borderRadius: 0,
    img: {
      borderRadius: "8px",
      objectPosition: "center",
      border: `1px solid ${theme.palette.divider}`,
      ...(theme.direction === "rtl" && {
        "-webkit-transform": "scaleX(-1)",
        transform: "scaleX(-1)",
      }),
    },
  },
  "& .bg-overlay": {
    top: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  "& .controls-wrapper": {
    paddingTop: theme.spacing(2),
    overflow: "hidden",
    position: "relative",
    zIndex: 22,
    "& .controls-wrapper-btn": {
      position: "absolute",
      top: 0,
      lef: 0,
      height: "100%",
      width: "100%",
      marginTop: "5px",
      "& button": {
        minWidth: 10,
        height: 75,
        border: `1px solid ${theme.palette.divider}`,
        background: theme.palette.background.paper,
        svg: {
          fontSize: 10,
          color: theme.palette.common.black,
        },
      },
    },
    "& .controls-button": {
      minWidth: 60,
      minHeight: 60,
      position: "relative",
      cursor: "pointer",
      img: {
        borderRadius: "8px",
        border: `2px solid ${theme.palette.divider}`,
      },

      "&.active": {
        img: {
          border: `2px solid ${theme.palette.primary.main}`,
        },
      },
    },
  },
}));
export default RootStyled;
