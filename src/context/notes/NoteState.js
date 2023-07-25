import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const host = "http://localhost:5000"
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)


  //Get all note
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOGI4YjIzMTRkMjQ0YWY2ODZkMjNmIn0sImlhdCI6MTY4OTgzMTA3OH0.mmRTtJXRYj_J6hxFX_WjtRnaEHbpJu4weU9tlgmoOH8',
      },
    });

    const json = await response.json();
    console.log(json)
    setNotes(json)
  }


  //Add a note
  const addNote = async (title, description, tag) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOGI4YjIzMTRkMjQ0YWY2ODZkMjNmIn0sImlhdCI6MTY4OTgzMTA3OH0.mmRTtJXRYj_J6hxFX_WjtRnaEHbpJu4weU9tlgmoOH8',
      },
      body: JSON.stringify({ title, description, tag })
    });

    const json = await response.json();
    console.log(json);

    console.log("Adding a note");
    const note = {
      "_id": "64ba29d22aa82d2a929579fb",
      "user": "64b8b8b23146244af686d23f",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-07-21T06:46:42.962Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote = async (id) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOGI4YjIzMTRkMjQ0YWY2ODZkMjNmIn0sImlhdCI6MTY4OTgzMTA3OH0.mmRTtJXRYj_J6hxFX_WjtRnaEHbpJu4weU9tlgmoOH8',
      }

    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the note with the id" + id);
    const newNote = notes.filter((note) => { return note._id !== id });
    setNotes(newNote);
  }

  //Edit a Note
  const editNote = async (id, title, description, tag) => {

    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiOGI4YjIzMTRkMjQ0YWY2ODZkMjNmIn0sImlhdCI6MTY4OTgzMTA3OH0.mmRTtJXRYj_J6hxFX_WjtRnaEHbpJu4weU9tlgmoOH8',
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
