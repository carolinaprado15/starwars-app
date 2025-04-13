import React from "react";
import "./Button.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, width, disabled, onClick }) => {
  return (
    <button
      className="custom-button"
      style={{ width }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export { Button };