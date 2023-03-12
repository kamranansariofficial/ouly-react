import React, { useEffect, useState } from "react";
// material
import { Box, Stack, Skeleton, Button } from "@mui/material";
// components
import { SearchResultCard, SearchResultToolbar } from "components";
import { useNavigate } from "react-router-dom";

export default function SearchResultPage() {
  const navigate = useNavigate();
  const [state, setState] = useState("desktop");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <Box>
      <SearchResultToolbar
        onClickView={(val) => setState(val)}
        state={state}
        isLoading={loading}
      />
      <SearchResultCard viewPort={state} isLoading={loading} />
      <Box
        width={{ sm: "50%", md: "20%" }}
        position="fixed"
        bottom={50}
        right={90}
      >
        <Stack spacing={3} direction="row">
          {loading ? (
            <Skeleton variant="rounded" width="100%" height={48} />
          ) : (
            <Button
              variant="outlined"
              size="large"
              color="secondary"
              sx={{ bgcolor: "#fff" }}
              onClick={() => navigate("/editing/edit-page")}
              fullWidth
            >
              Edit
            </Button>
          )}
          {loading ? (
            <Skeleton variant="rounded" width="100%" height={48} />
          ) : (
            <Button
              variant="contained"
              size="large"
              color="primary"
              // onClick={() => navigate("/dashboard/advantages-product")}
              fullWidth
            >
              Validation
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
