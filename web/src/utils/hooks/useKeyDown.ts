import { useEffect, useState } from "react";

const useKeyDown = (targetKey: string) => {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === targetKey) {
        setActivated(prev => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [targetKey]);

  const reset = () => {
    setActivated(false);
  };

  return { activated, reset };
};

export { useKeyDown };
