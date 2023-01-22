import React from 'react';
import ReactDOM from 'react-dom/client';
import NotesContent from "./Notes_content";

const notes = ReactDOM.createRoot(document.getElementById("notes_root"));
notes.render(
  <React.StrictMode>
    <NotesContent />
  </React.StrictMode>
);