import React from "react";

export default function ToolbarItem({ children, applyStyle, isActive }) {
  return (
    <div
      className={`toolbar-item ${isActive ? "selected" : ""}`}
      onClick={applyStyle}
    >
      {children}
    </div>
  );
}
