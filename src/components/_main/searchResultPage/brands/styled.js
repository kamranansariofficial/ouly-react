import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme, isLoading }) => ({
  background: isLoading ? "" : "#FBFBFE",
  padding: theme.spacing(3),
  margin: theme.spacing(3.5, 0),
  border: `1px solid transparent`,
  position: "relative",
  "& .edit-btn": {
    width: "calc(100% + 2px)",
    left: -1,
    top: -19,
  },
  "&.active": {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  "& .brands-wrapper": {
    position: "relative",
    borderLeft: `1px solid transparent`,
    borderRight: `1px solid transparent`,
    borderTop: "1px solid #f2f5f7",
    borderBottom: "1px solid #f2f5f7",
    "&.active": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  "& .logo-wrapper": {
    position: "relative",
    border: `1px solid transparent`,
    padding: theme.spacing(1),
    "&.active": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));
export default RootStyled;
