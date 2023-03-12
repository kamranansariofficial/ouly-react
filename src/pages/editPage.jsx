import React, { useEffect, useState } from "react";
// components
import { SearchResultToolbar, Sidebar } from "components";
export default function EditPage() {
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
    </>
  );
}
