"use client";

import { memo, useEffect } from "react";

const devMode = process.env.NODE_ENV === "development";

const AdRect = () => {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("# error : ", e);
    }
  }, []);

  return (
    <div>
      <ins
        className={"adsbygoogle"}
        style={{
          position: "absolute",
          bottom: 30,
          display: "inline-block",
          width: 300,
          height: 90,
          backgroundColor: "red",
          left: "50%",
          transform: "translateX(-50%)"
        }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD_CLIENT}
        data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_AD_SLOT}
      ></ins>
    </div>
  );
};

export default memo(AdRect);
