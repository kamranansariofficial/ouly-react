import { alpha, styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";

const RootStyled = styled(AppBar)(({ theme }) => ({
  "& .actions-stack": {
    marginLeft: "auto",
  },
  "& .notification-icon-button": {
    background: "#F0F5FF",
    borderRadius: 12,
    "& > div": {
      marginTop: -4,
    },
    "&:hover": {
      background: "#F0F5FF",
      opacity: 0.8,
    },
  },
  "& .premium-btn": {
    borderRadius: 12,
    background: alpha(theme.palette.warning.main, 0.08),
    color: theme.palette.warning.main,
    "&:hover": {
      background: alpha(theme.palette.warning.main, 0.08),
      opacity: 0.8,
    },
  },
  "& .user-btn": {
    borderRadius: 12,
    background: "#F0F5FF",
    color: theme.palette.text.primary,
    "&:hover": {
      background: "#F0F5FF",
      opacity: 0.8,
    },
  },
}));

export default RootStyled;
