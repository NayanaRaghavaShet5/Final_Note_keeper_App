import React, { useState } from "react";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExa, setExa] = useState(false);

  function setExp() {
    setExa(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExa && (
          <input
            onChange={e => props.handleNote(e)}
            name="title"
            placeholder="Title"
            value={props.titleValue}
          />
        )}
        <textarea
          onChange={e => props.handleNote(e)}
          name="content"
          placeholder="Take a note..."
          rows={isExa ? 5 : 1}
          value={props.contentValue}
          onClick={setExp}
        />
        <Zoom in={isExa}>
          <Fab onClick={props.addNote}>
            <AddCircleRoundedIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
