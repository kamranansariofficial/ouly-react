import React from "react";
import { ReactSVG } from "react-svg";
import { styled } from "@mui/material/styles";

const RootStyled = styled(ReactSVG)(({ theme, height, width }) => ({
  "& > div, svg": {
    height: height || 24,
    width: width || 24,
  },
}));

function ReactSvg({ name, ...others }) {
  return <RootStyled src={`/static/icons/${name}.svg`} {...others} />;
}

export default ReactSvg;
