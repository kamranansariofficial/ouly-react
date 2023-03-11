import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  "& .MuiInputBase-input": {
    background: theme.palette.background.paper,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid rgba(99, 91, 255, 0.12) !important",
  },
  "& .describe": {
    "& .MuiOutlinedInput-root": {
      background: theme.palette.background.paper,
    },
  },
  "& .empty-box": {
    height: "128px",
    background: theme.palette.background.paper,
    borderRadius: "12px",
    border: "1px dashed rgba(99, 91, 255, 0.2)",
  },
  "& .loading-btn": {
    float: "right",
    maxWidth: 280,
    width: "100%",
  },
  "& .grid-preview": {
    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto",
    gridGap: "32px",
    width: "100%",
    padding: theme.spacing(4, 0),
  },
}));
export default RootStyled;
