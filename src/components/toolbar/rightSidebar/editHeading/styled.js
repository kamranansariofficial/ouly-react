import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const RootStyled = styled(Stack)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: "8.5px 14px !important",
    fontSize: "12px",
  },
  "& .ql-toolbar.ql-snow": {
    "& .ql-picker-label": {
      width: 62,
      fontSize: 8,
    },
  },
}));

export default RootStyled;
