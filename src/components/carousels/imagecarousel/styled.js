import { styled, alpha } from "@mui/material/styles";
const RootStyled = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  paddingTop: "100%",
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
    "&.active": {
      img: {
        border: `1px solid ${theme.palette.primary.main} !important`,
        borderRadius: 0,
      },
    },
    "& .edit-btn": {
      position: "absolute",
      top: 0,
      button: {
        height: 19,
        borderRadius: 0,
        fontSize: "11px",
        minWidth: 28,
      },
      "& .setting-icon": {
        width: 28,
      },
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
      top: "50%",
      transform: "translatey(-50%)",
      zIndex: 22,
      marginTop: "5px",
      minWidth: 10,
      height: 75,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      svg: {
        fontSize: 10,
        color: theme.palette.common.black,
      },
      "&.left": {
        left: 0,
      },
      "&.right": {
        right: 0,
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
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(2),
      "& .controls-wrapper-btn": {
        marginTop: 0,
        paddingBottom: 7,
      },
    },
  },
}));
export default RootStyled;
