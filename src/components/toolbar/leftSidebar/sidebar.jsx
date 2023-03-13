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
  Stack,
} from "@mui/material";
import ArrowRightRoundedIcon from "@mui/icons-material/ArrowRightRounded";
// components
import RootStyled from "./styled";
import ReactSvg from "utils/reactSVG";
import { configData } from "./config";

export default function ClippedDrawer({ children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <RootStyled variant="permanent">
      <Toolbar className="toolbar" />
      <Toolbar className="toolbar" />
      <Box>
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
        <Stack spacing={1} mt={3}>
          {configData.map((v) => (
            <Accordion key={Math.random()}>
              <AccordionSummary
                expandIcon={<ArrowRightRoundedIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Stack spacing={1} direction="row">
                  <ReactSvg name={v.icon} />
                  <Typography variant="body2" fontSize={16} fontWeight={500}>
                    {v.name}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                {v.children.map((value) => (
                  <>
                    {value.children ? (
                      <Accordion key={Math.random()}>
                        <AccordionSummary
                          className="accordion-summary"
                          expandIcon={<ArrowRightRoundedIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Stack
                            spacing={2}
                            direction="row"
                            alignItems={"center"}
                          >
                            <ReactSvg
                              name={value.icon}
                              height={18}
                              width={18}
                            />
                            <Typography
                              variant="body2"
                              fontSize={16}
                              color="text.secondary"
                              fontWeight={500}
                            >
                              {value.name}
                            </Typography>
                          </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                          {value?.children?.map((val) => (
                            <Stack
                              key={v.icon}
                              spacing={2}
                              direction="row"
                              ml={2}
                              mb={1}
                              className="clickable"
                            >
                              <ReactSvg
                                name={val.icon}
                                width={18}
                                height={18}
                              />
                              <Typography
                                variant="body2"
                                fontSize={14}
                                color="text.secondary"
                                fontWeight={600}
                              >
                                {val.name}
                              </Typography>
                            </Stack>
                          ))}
                        </AccordionDetails>
                      </Accordion>
                    ) : (
                      <Stack
                        key={Math.random()}
                        spacing={2}
                        direction="row"
                        mb={1}
                        ml={4}
                        className="clickable"
                      >
                        <ReactSvg name={value.icon} width={18} height={18} />
                        <Typography
                          variant="body2"
                          fontSize={14}
                          color="text.secondary"
                          fontWeight={600}
                        >
                          {value.name}
                        </Typography>
                      </Stack>
                    )}
                  </>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Box>
    </RootStyled>
  );
}
