import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  maxWidth: 950,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "0 auto",
  "& .MuiTabPanel-root": {
    paddingLeft: 0,
    paddingRight: 0,
    "& .MuiInputBase-root": {
      background: theme.palette.background.paper,
    },
  },
  "& .subscription-btn": {
    "& .MuiButtonBase-root": {
      color: theme.palette.common.black,
      fontSize: 20,
    },
  },
  "& .MuiTabs-flexContainer": {
    borderBottom: `1px solid ${theme.palette.divider}`,
    button: {
      fontWeight: 400,
      color: "#263238",
      "&.Mui-selected": {
        color: theme.palette.primary.main,
      },
    },
  },
}));
export default RootStyled;
