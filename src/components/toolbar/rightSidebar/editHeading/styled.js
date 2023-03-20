import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const RootStyled = styled(Stack)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    padding: "8.5px 14px !important",
    fontSize: "12px",
  },
  "& .ql-toolbar": {
    border: `2px solid ${theme.palette.primary.main}`,
    "&.ql-snow": {
      display: "flex",
      alignItems: "center",
      background: "#F7F7FF",
      padding: "12px 16px",
      borderRadius: "8px 8px 0px 0px",
      "&>span:last-child": {
        display: "none !important",
      },
      "& .ql-formats": {
        marginRight: 0,
        display: "flex",
        gap: "6px",
        button: {
          height: 16,
          width: 16,
        },
      },
      "& .ql-picker.ql-header": {
        width: 62,
        fontSize: 8,
        border: "1px solid #DFE1E5",
        borderRadius: "6px",
        background: "#fff",
      },
    },
  },
  "& .ql-container": {
    "&.ql-snow": {
      borderRadius: "0px 0px 8px 8px",
    },
  },
  "& .editable-box": {
    position: "absolute",
    top: 8,
    left: -22,

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
  "& .quill": {
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "8px",
  },
}));

export default RootStyled;
