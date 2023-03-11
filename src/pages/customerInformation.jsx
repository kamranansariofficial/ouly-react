import React, { useEffect, useState } from "react";
// components
import { CustomerInformation } from "components";
export default function CustomerInformations() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return <CustomerInformation isLoading={loading} />;
}
