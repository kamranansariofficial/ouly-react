import React, { useEffect, useState } from "react";
// components
import {
  SearchResultToolbar,
  Sidebar,
  SearchResultCard,
  RightSidebar,
} from "components";
export default function EditPage() {
  const [open, setOpen] = useState(null);
  const [state, setState] = useState("desktop");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      <SearchResultToolbar
        onClickView={(val) => setState(val)}
        state={state}
        isLoading={loading}
        isEdit
      />
      <Sidebar />
      <SearchResultCard
        viewPort={state}
        isLoading={loading}
        onClick={(val) => setOpen(val)}
        open={open}
        isEditMode
      />

      <RightSidebar open={open} />
    </>
  );
}
