import React from "react";

import "./buttons.scss";

export default function Buttons({ save, cancel }) {
  return (
    <div className="btn-container">
      <button className="btn btn-save" onClick={save}>
        Save
      </button>
      <button className="btn btn-cancel" onClick={cancel}>
        Cancel
      </button>
    </div>
  );
}
