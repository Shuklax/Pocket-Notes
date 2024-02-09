import React, { useEffect } from "react";
import Note from "./Note";
import "./css/NoteList.scss";
function NoteList({ heading, notes }) {
  useEffect(() => {}, [notes]);
  // Do something after notes change (e.g., log, re-render)
  // Re-run effect only when notes change

  return (
    <div className="Nlist">
      <ul className="Notes-List">
        {notes.map((note, index) => {
          // return(<li key={index}><Note note={note}/></li>)
          return <Note note={note} key={index} />;
        })}
        ;
      </ul>
    </div>
  );
}

export default NoteList;
