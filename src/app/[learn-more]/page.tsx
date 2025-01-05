"use client";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function LearnMorePage() {
    const url = usePathname();
  useEffect(() => {
    (async () => {
      const response = await fetch(`/api${url}`);
      const data = await response.json();
      console.log( data, url);
    })();
  }, []);

  return <div>fupps page</div>;
}

export default LearnMorePage;
