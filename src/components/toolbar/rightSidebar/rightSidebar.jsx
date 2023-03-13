import * as React from "react";
// material
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import RootStyled from "./styled";
import { Toolbar } from "@mui/material";
import { EditHeading } from "./editHeading";

export default function TemporaryDrawer({ open }) {
  // const toggleDrawer = (anchor, open) => (event) => {
  //   setState({ ...state, [anchor]: open });
  // };
  return (
    <Box position={"relative"} zIndex={9999}>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer("right", true)}>Right</Button> */}
        <RootStyled
          anchor={"right"}
          open={Boolean(open)}
          onClose={Boolean(open)}
        >
          <Toolbar className="toolbar" />
          <Toolbar className="toolbar" />
          <Toolbar className="toolbar" />
          <Box
            role="presentation"
            // onClick={toggleDrawer("right", false)}
            // onKeyDown={toggleDrawer("right", false)}
          >
            <EditHeading />
          </Box>
        </RootStyled>
      </React.Fragment>
    </Box>
  );
}
