// material
import { Box, Radio, Typography, Skeleton } from "@mui/material";
import { useState } from "react";

// styles
import RootStyled from "./styled";
// ----------------------------------------------------------------------

const color = ["Gold", "Blue", "Pink", "Purple", "Red"];

function IconColor({ ...props }) {
  const { value, className, active } = props;
  return (
    <Box className={`icon-color ${className}`}>
      <Typography variant="body2" color="text.primary">
        {value}
      </Typography>
    </Box>
  );
}

export default function SizeSinglePicker({ isLoading }) {
  const [state, setstate] = useState("Gold");
  return (
    <RootStyled value={state} onChange={(e) => setstate(e.target.value)} row>
      {color?.map((color) => {
        return isLoading ? (
          <Skeleton variant="rounded" width={66} height={30} sx={{ mr: 1 }} />
        ) : (
          <Radio
            key={color}
            className="radio-wrapper"
            value={color}
            disableRipple
            icon={<IconColor value={color} />}
            checkedIcon={<IconColor className="active" value={color} />}
          />
        );
      })}
    </RootStyled>
  );
}
