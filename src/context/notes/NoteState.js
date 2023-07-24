import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "64ba29d22aa82d2a929579f9",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.289Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22au82d2a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82dua929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82d26929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa8282a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82d2a929579fb",
          "user": "64b8b8b23146244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial)


      //Add a note
      const addNote = (title, description, tag)=>{
        //TODO: API Call
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

      const deleteNote = (id)=>{
        console.log("Deleting the note with the id" + id);
      }

      //Edit a Note
      const editNote = ()=>{

      }

    return (
        <NoteContext.Provider value={{notes, setNotes,addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
