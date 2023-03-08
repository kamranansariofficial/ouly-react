// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme }) => ({
  maxWidth: 950,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "0 auto",
  "& .MuiCardContent-root": {
    padding: theme.spacing(4),
    "& .card-main": {
      background: theme.palette.background.neutral,
      borderRadius: "8px",
      boxShadow: "none",
      border: "1px solid #EBE8FF",
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginBottom: theme.spacing(4),

      "& .MuiListItem-root": {
        marginBottom: theme.spacing(2),
        "& .MuiListItemIcon-root": {
          minWidth: 30,
          position: "relative",
          svg: {
            height: "17px",
            width: "17px",
            fill: theme.palette.background.paper,
          },
        },
        "& .MuiTypography-root": {
          fontSize: "18px",
          fontWeight: 600,
        },
      },
      "& .card-icon": {
        background: theme.palette.background.paper,
        borderRadius: "18px",
        boxShadow: "none",
        border: "1px solid #EBE8FF",
        height: 158,
        width: 148,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
}));
export default RootStyled;