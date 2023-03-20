import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  height: 600,
  textAlign: "center",
  "& .processing": {
    "& .MuiLinearProgress-root": {
      height: 10,
      width: 200,
      margin: theme.spacing(4, "auto"),
    },
  },
  "& .processing-successful": {
    padding: theme.spacing(7, 0),
  },
  "& .processing-error": {
    padding: theme.spacing(7, 0),
    button: {
      fontSize: 24,
      fontWeight: 400,
    },
    "& .error-btn": {
      marginLeft: theme.spacing(2),
    },
  },
  "& .failed": {
    padding: theme.spacing(15, 0),
  },
}));

export default RootStyled;
