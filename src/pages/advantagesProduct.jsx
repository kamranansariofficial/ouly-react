import React, { useEffect, useState } from "react";
import { AdvantagesProduct } from "components";
export default function AdvantagesProducts() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <AdvantagesProduct isLoading={loading} />
    </div>
  );
}
