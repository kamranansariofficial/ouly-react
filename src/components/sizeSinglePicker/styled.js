import { styled, alpha } from "@mui/material/styles";
import RadioGroup from "@mui/material/RadioGroup";

const RootStyled = styled(RadioGroup)(({ theme }) => ({
  "& .radio-wrapper": {
    padding: "5px",
    color: "transparent",
    "&:hover": { opacity: 0.72 },
    "& .icon-color": {
      height: 30,
      padding: theme.spacing(0, 2.5),
      display: "flex",
      borderRadius: "8px",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      transition: theme.transitions.create("all", {
        duration: theme.transitions.duration.shortest,
      }),
      "&.active": {
        boxShadow: "2.71323px 2.71323px 27.1323px rgba(0, 0, 0, 0.06)",
        backgroundColor: theme.palette.primary.main,

        p: {
          fontWeight: 600,
          color: "#fff",
        },
      },
    },
  },
}));
export default RootStyled;
