import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme }) => ({
  "& .MuiCardContent-root": {
    padding: theme.spacing(4),
    "& .top-card": {
      background: theme.palette.background.neutral,
      borderRadius: "12px",
      padding: "12px",
      "& .MuiBadge-root": {
        "& .MuiAvatar-img": {
          height: 40,
          width: 40,
        },
        span: {
          bottom: 6,
          right: 6,
        },
      },
    },
    "& .message-sec": {
      paddingTop: theme.spacing(4),
      "& .MuiChip-root ": {
        color: "#173E66",
        borderRadius: "8px !important",
        fontWeight: 500,
        width: 92,
        display: "flex",
        margin: "0 auto",
      },
      "& .MuiBadge-root": {
        "& .MuiAvatar-img": {
          height: 40,
          width: 40,
        },
        span: {
          bottom: 6,
          right: 6,
        },
      },
      "& .received-message": {
        width: "calc(100% - 325px)",
        "& .received-card": {
          padding: "12px 14px",
          background: "#F9FAFB",
          borderRadius: " 0px 12px 12px 12px",
          color: "#030A5A",
        },
      },
    },
  },
}));

export default RootStyled;
