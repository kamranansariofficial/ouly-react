// material
import { Box, Radio, Typography } from "@mui/material";

// styles
import RootStyled from "./styled";
// ----------------------------------------------------------------------

const color = ["Gold", "Blue", "Pink", "Purple", "Red"];

function IconColor({ ...props }) {
  const { value, className } = props;
  return (
    <Box className={`icon-color ${className}`}>
      <Typography variant="body2" color="text.primary">
        {value}
      </Typography>
    </Box>
  );
}

export default function SizeSinglePicker() {
  return (
    <RootStyled row>
      {color?.map((color) => {
        return (
          <Radio
            key={color}
            className="radio-wrapper"
            value={color}
            color="default"
            disableRipple
            icon={<IconColor value={color} />}
            checkedIcon={<IconColor className="active" value={color} />}
          />
        );
      })}
    </RootStyled>
  );
}
