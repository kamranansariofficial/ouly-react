import React from "react";
// material
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
// components
import RootStyled from "./styled";
import ReactSvg from "utils/reactSVG";

const row = [
  {
    name: "CURLISTA Pro 5 IN 1",
    date: "12 Jun,2023",
  },
  {
    name: "ABC Product",
    date: "12 Jun,2023",
  },
  {
    name: "ABC Product",
    date: "12 Jun,2023",
  },
  {
    name: "ABC Product",
    date: "12 Jun,2023",
  },
  {
    name: "ABC Product",
    date: "12 Jun,2023",
  },
];

export default function ProductTable() {
  return (
    <RootStyled component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {row.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="right">
                <Stack
                  direction="row"
                  justifyContent="space-around"
                  className="stack-btn"
                >
                  <IconButton>
                    <ReactSvg name="download" height={20} width={20} />
                  </IconButton>
                  <Divider
                    orientation="vertical"
                    className="divider"
                    variant="middle"
                    flexItem
                  />
                  <IconButton>
                    <ReactSvg name="edittable" height={20} width={20} />
                  </IconButton>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </RootStyled>
  );
}
