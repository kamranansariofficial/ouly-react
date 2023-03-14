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

    "&.active": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
}));

export default RootStyled;
