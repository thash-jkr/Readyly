import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./editors.scss";
import { FiEdit } from "react-icons/fi";
import Buttons from "./buttons/Buttons.js";
import Toolbar from "./Toolbar.js";

export default function FbEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [isEditor, setEditor] = useState(false);

  const updateEditorState = editorState => setEditorState(editorState);
  const handleEditArea = () => setEditor(true);
  const handleCancel = () => {
    console.log("discard changes");
    setEditorState(() => EditorState.undo(editorState));
    setEditor(false);
  };
  const handleSave = () => {
    console.log("save changes");
    setEditor(false);
  };
  return (
    <div className="editor-content">
      <FiEdit
        className={`edit-icon ${isEditor ? "active" : ""}`}
        onClick={handleEditArea}
      />
      {isEditor && (
        <Toolbar
          editorState={editorState}
          updateEditorState={updateEditorState}
        />
      )}
      <div className={`editor-area ${isEditor ? "" : "disabled"}`}>
        <Editor
          editorState={editorState}
          onChange={updateEditorState}
          placeholder="Write your content here ..."
        />
      </div>
      {isEditor && <Buttons save={handleSave} cancel={handleCancel} />}
    </div>
  );
}
