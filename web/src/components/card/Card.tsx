import React from "react";
import "./Card.css";

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="card-container">
      {children}
    </div>
  )
}

export { Card };