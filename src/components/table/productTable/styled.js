import { TableContainer } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(TableContainer)(({ theme }) => ({
  "& .MuiTableHead-root": {
    "& .MuiTableCell-root": {
      background: "#F9FAFB",
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(8),
    },
  },
  "& .MuiTableBody-root": {
    "& .MuiTableCell-root": {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(4),
    },
  },
  "& .stack-btn": {
    border: "1px solid #D1D5DB",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
    borderRadius: " 6px",
    maxWidth: 80,
    marginLeft: "auto",
    "& .MuiButtonBase-root": {
      padding: "5px",
      "&>div>div": {
        display: "flex",
      },
    },
    "& .MuiDivider-root": {
      marginTop: 0,
      marginBottom: 0,
    },
  },
}));

export default RootStyled;
