import * as React from "react";
// material
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Toolbar, Stack } from "@mui/material";
// components
import { EditHeading } from "./editHeading";
import { EditImages } from "./editImages";

export default function TemporaryDrawer({ open }) {
  // const toggleDrawer = (anchor, open) => (event) => {
  //   setState({ ...state, [anchor]: open });
  // };
  console.log(open);
  return (
    <React.Fragment>
      <Slide in={Boolean(open)} direction="left">
        <Box
          zIndex={9999}
          sx={{
            position: "fixed",
            width: 280,
            top: 0,
            right: 0,
            bgcolor: "#fff",
            p: 3,
            zIndex: 2,
            height: 1,
          }}
        >
          <Toolbar className="toolbar" />
          <Toolbar className="toolbar" />
          <Box role="presentation">
            {open === "content-heading" ? <EditHeading /> : <EditImages />}
          </Box>
        </Box>
      </Slide>
    </React.Fragment>
  );
}
