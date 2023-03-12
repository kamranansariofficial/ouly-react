import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme, isLoading }) => ({
  "& .chip": {
    fontWeight: 600,
  },

  "& .list": {
    "& .MuiListItem-root": {
      background: isLoading ? "transparent" : "rgba(239, 238, 254, 0.7)",
      borderBottom: isLoading ? "" : "1px solid #fff",
      height: "35px",
      paddingLeft: theme.spacing(1.4),
      paddingRight: theme.spacing(1.4),
      overflow: "hidden",
      "&.border-top": {
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      },
      "&.border-bottom": {
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      },
      "& .MuiListItemIcon-root": {
        minWidth: 27,
      },
      "&.is-loading": {
        background: "transparent",
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
      },
    },
  },
  "& .incrementer": {
    width: 87,
    padding: theme.spacing(0.5),
    boxShadow: " 2.71323px 2.71323px 27.1323px rgba(0, 0, 0, 0.06)",
    border: "0.678308px solid #546E7A",
    borderRadius: "5px",
    svg: {
      width: "16px",
      height: "16px",
    },
  },
}));
export default RootStyled;
