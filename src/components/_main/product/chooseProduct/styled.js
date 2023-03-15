import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const RootStyled = styled(Box)(({ theme }) => ({
  "& .grid-display": {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "18px",
    width: "100%",
    "& .img-sec": {
      cursor: "pointer",
      borderRadius: "8px",
      height: 117,
      img: {
        borderRadius: "8px",
        border: " 1px solid #F1F1F1",
        objectFit: "cover",
      },
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
  },
}));

export default RootStyled;
