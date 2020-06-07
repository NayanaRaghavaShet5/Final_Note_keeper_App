import React from "react";
import DeleteForeverRoundedIcon from "@material-ui/icons/Delete";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.onDelete(props.id)}>
        <DeleteForeverRoundedIcon color="secondary" />
      </button>
    </div>
  );
}

export default Note;
