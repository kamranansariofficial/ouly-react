// material
import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Card)(({ theme, isLoading }) => ({
  maxWidth: 950,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "0 auto",
  "& .MuiCardContent-root": {
    padding: theme.spacing(4),
    "& .describe": {
      marginBottom: theme.spacing(4),
      "& .MuiButtonBase-root": {
        height: 297,
      },
    },
    "& .MuiCollapse-hidden ": {
      display: "none",
    },
    "& .MuiCollapse-wrapperInner": {
      width: "100%",
    },
    "& .card-main": {
      background: isLoading ? "transparent" : theme.palette.background.neutral,
      border: isLoading ? "none" : "1px solid #EBE8FF",
      borderRadius: "8px",
      boxShadow: "none",
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginBottom: theme.spacing(4),
      position: "relative",
      "& .MuiCollapse-root": {
        width: "100% !important",
      },
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
      "& .card-icon-feild": {
        "& .MuiInputBase-root": {
          width: "100%",
          borderRadius: "18px",
          background: theme.palette.background.paper,
          border: "1px solid #EBE8FF",
        },
      },
      "& .editable-box1": {
        display: isLoading ? "none" : "block",
        position: "absolute",
        top: 8,
        right: -23,
        height: "calc(100% - 50px)",
        borderLeft: `2px solid ${theme.palette.primary.main}`,
        "& .MuiButtonBase-root": {
          borderRadius: 0,
          height: 22,
          width: 22,
          marginBottom: theme.spacing(0.2),
          background: theme.palette.primary.main,
          "& >div >div": {
            display: "flex",
          },
        },
      },
    },
  },
  "& .editable-box": {
    display: isLoading ? "none" : "block",
    position: "absolute",
    top: 8,
    right: -23,
    height: "calc(100% - 80px)",
    borderLeft: `2px solid ${theme.palette.primary.main}`,
    "& .MuiButtonBase-root": {
      borderRadius: 0,
      height: 22,
      width: 22,
      marginBottom: theme.spacing(0.2),
      background: theme.palette.primary.main,
      "& >div >div": {
        display: "flex",
      },
    },
  },
}));
export default RootStyled;
