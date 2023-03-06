import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "& .top-left-circle": {
    position: "fixed",
    left: -268,
    top: -186,
    content: "''",
    width: 500,
    height: 500,
    background: theme.palette.grey[200],
    zIndex: 2,
    borderRadius: "50%",
    "&:before": {
      position: "fixed",
      left: -114,
      top: -328,
      content: "''",
      width: 500,
      height: 500,
      border: `0.5px solid ${theme.palette.primary.main}`,
      zIndex: 1,
      borderRadius: "50%",
    },
  },
  "& .bottom-right-circle": {
    position: "fixed",
    right: -114,
    bottom: -328,
    content: "''",
    width: 500,
    height: 500,
    background: theme.palette.grey[200],
    zIndex: 2,
    borderRadius: "50%",
    "&:before": {
      position: "fixed",
      right: -268,
      bottom: -186,
      content: "''",
      width: 500,
      height: 500,
      border: `0.5px solid ${theme.palette.primary.main}`,
      zIndex: 1,
      borderRadius: "50%",
    },
  },
  "& .main": {
    alignItems: "center",
    width: "100%",
  },
}));

export default RootStyled;
