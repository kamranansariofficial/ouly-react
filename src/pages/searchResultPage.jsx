import React from "react";
// material
import { Box, Container } from "@mui/material";
import { SearchResultCard, SearchResultToolbar } from "components";

export default function SearchResultPage() {
  return (
    <Box>
      <SearchResultToolbar />
      <SearchResultCard />
    </Box>
  );
}
