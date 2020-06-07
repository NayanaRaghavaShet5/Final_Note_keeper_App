import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [notes, setNotes] = useState([]);

  function handleNote(e) {
    const { value, name } = e.target;
    setNote(preValue => {
      return { ...preValue, [name]: value };
    });
  }

  function addNote(e) {
    e.preventDefault();
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });
    setNote({ title: "", content: "" });
  }

  function handleDelete(id) {
    console.log("Delete happenmed", notes);
    setNotes(preValue => {
      return preValue.filter((filterItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleNote={handleNote}
        note={note}
        addNote={addNote}
        titleValue={note.title}
        contentValue={note.content}
      />
      {!notes
        ? []
        : notes.map((data, index) => {
            return (
              <Note
                key={index}
                title={data.title}
                content={data.content}
                onDelete={handleDelete}
                id={index}
              />
            );
          })}
      <Footer />
    </div>
  );
}

export default App;
