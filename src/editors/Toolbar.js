import React from "react";
import { RichUtils } from "draft-js";
import "./toolbar.scss";
import ToolbarItem from "./ToolbarItem.js";
import toolbarIcons from "./toolbarIcons.js";

export default function Toolbar({ editorState, updateEditorState, isEditor }) {
  const applyStyle = style => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const isActive = style => {
    const draftStyle = editorState.getCurrentInlineStyle();
    return draftStyle.has(style);
  };

  return (
    <div className="toolbar-container">
      {toolbarIcons.map((item, i) => (
        <ToolbarItem
          key={`${item.label}-${i}`}
          applyStyle={() => applyStyle(item.style)}
          isActive={isActive(item.style)}
        >
          {item.icon || item.label}
        </ToolbarItem>
      ))}
    </div>
  );
}
