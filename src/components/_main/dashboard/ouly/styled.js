import { styled } from "@mui/material/styles";

const RootStyled = styled("div")(({ theme }) => ({
  maxWidth: 572,
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  margin: "0 auto",
  "& .MuiTab-textColorPrimary": {
    fontSize: 18,
    "&.Mui-selected": {
      fontWeight: 600,
    },
  },

  "& .style-text-field": {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
    "& .MuiOutlinedInput-root": {
      minHeight: 60,
      background: "#fff",
      borderRadius: "12px",
      "& fieldset": {
        borderColor: "transparent",
        boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
        borderRadius: "12px",
        border: "1px solid #EFF1F5",
      },
      "&:hover fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: "transparent",
      },
    },
  },
  "& .styled-icon-button": {
    height: 60,
    width: 60,
    background: "#fff",
    borderRadius: "12px",
    border: "1px solid #EFF1F5",
    marginLeft: "16px",
    boxShadow: "4px 4px 30px rgba(0, 0, 0, 0.08)",
    svg: {
      path: {
        fill: "#929EAE",
      },
    },
    "&.active": {
      border: "1px solid #2563EB",
      svg: {
        path: {
          fill: "#2563EB",
        },
      },
    },
  },
  "& .upload-button": {
    "&.active": {
      svg: {
        path: {
          fill: "#2563EB",
        },
      },
    },
  },
}));
export default RootStyled;
