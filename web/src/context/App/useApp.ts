import { useContext } from "react";
import { AppContext } from "./AppContext";

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return context;
};

export { useApp };
