import * as React from "react";
// react router dom
import { useNavigate, useLocation } from "react-router-dom";
// material
import {
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Toolbar,
  Box,
} from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
// components
import RootStyled from "./styled";

export default function ClippedDrawer({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <RootStyled variant="permanent">
      <Toolbar className="toolbar" />
      <Toolbar className="toolbar" />
      <Box sx={{ overflow: "auto" }}>
        <Typography
          variant="h6"
          fontSize={20}
          textAlign="center"
          fontWeight={600}
          mb={3}
          mt={1.5}
        >
          CURLISTAR
        </Typography>
        <Divider />
        <Accordion sx={{ mt: 3 }}>
          <AccordionSummary
            expandIcon={<ArrowRightRoundedIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body2" fontSize={16} fontWeight={500}>
              Image Avec texte
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </RootStyled>
  );
}
