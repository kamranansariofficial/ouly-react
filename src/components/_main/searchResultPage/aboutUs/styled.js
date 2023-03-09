import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  "& .svg-icon": {
    fontSize: "7px",
  },
}));

export default RootStyled;
