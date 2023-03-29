import React from "react";

import "./content.scss";
import FbEditor from "../editors/FbEditor.js";
import CustomToolbarEditor from "../editors/CustomToolbarEditor.js";

export default function Content() {
  return (
    <div className="grid-content">
      <h3 className="title">Facebook DraftJS</h3>
      <div className="grid-item">
        <FbEditor />
      </div>
      <div className="grid-item">
        <CustomToolbarEditor />
      </div>
      <div className="grid-item" />
    </div>
  );
}
