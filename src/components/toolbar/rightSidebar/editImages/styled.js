import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

const RootStyled = styled(Stack)(({ theme }) => ({
  "& .grid-preview": {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridGap: "18px",
    width: "100%",
  },
  "& .select-img": {
    cursor: "pointer",
    borderRadius: "8px",
    border: `1px solid transparent`,
    "& .img-icon": {
      display: "none",
    },
    "&.active": {
      "& .img-icon": {
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        borderRadius: "8px",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        svg: {
          fill: "#fff",
        },
      },
    },
  },
}));

export default RootStyled;
