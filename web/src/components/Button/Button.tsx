import React from "react";
import "./Button.css";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, width, disabled, loading, onClick }) => {
  return (
    <button
      className={"custom-button " + (!loading && disabled ? "disabled" : "")}
      style={{ width }}
      disabled={disabled}
      onClick={onClick}
    >
      {loading 
        ? <span className="spinner" />
        : children}
    </button>
  )
}

export { Button };