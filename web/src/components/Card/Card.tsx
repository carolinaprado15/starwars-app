import React from "react";
import "./Card.css";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ children, height, width }) => {
  return (
    <div className="card-container" style={{ height, width }}>
      {children}
    </div>
  )
}

export { Card };