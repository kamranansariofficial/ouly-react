import React, { useEffect, useState } from "react";
// components
import { HomeTabs } from "components";
function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return <HomeTabs isLoading={loading} />;
}

export default Home;
