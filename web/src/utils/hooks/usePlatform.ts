import { useState, useEffect } from "react";

const usePlatform = () => {
  const [platform, setPlatform] = useState<"mobile" | "desktop">(() =>
    window.innerWidth > 1023 ? "desktop" : "mobile"
  );

  useEffect(() => {
    const handleResize = () => {
      setPlatform(window.innerWidth > 1023 ? "desktop" : "mobile");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return platform;
}

export { usePlatform };