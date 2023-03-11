import React, { useEffect, useState } from "react";
// material
import { Box } from "@mui/material";
import { SearchResultCard, SearchResultToolbar } from "components";

export default function SearchResultPage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Box>
      <SearchResultToolbar isLoading={loading} />
      <SearchResultCard isLoading={loading} />
    </Box>
  );
}
