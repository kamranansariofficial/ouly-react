import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  maxWidth: 950,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "40px auto 0",
  "& .subscription-btn": {
    "& .MuiButtonBase-root": {
      color: theme.palette.common.black,
      fontSize: 20,
    },
  },
}));

export default RootStyled;
