import React, { useEffect, useState } from "react";
import { ProductInformation } from "components";
export default function MyProduct() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return <ProductInformation isLoading={loading} />;
}
