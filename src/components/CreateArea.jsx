import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={e => props.handleNote(e)}
          name="title"
          placeholder="Title"
          value={props.titleValue}
        />
        <textarea
          onChange={e => props.handleNote(e)}
          name="content"
          placeholder="Take a note..."
          rows="5"
          value={props.contentValue}
        />
        <button onClick={props.addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
