import React, { useEffect, useState } from "react";
// components
import { AddProductCard } from "components";
export default function EditProduct() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <AddProductCard isLoading={loading} />
    </div>
  );
}
