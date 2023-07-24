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
          "_id": "64ba29d22aa82d2a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82d2a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82d2a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82d2a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
        {
          "_id": "64ba29d22aa82d2a929579fb",
          "user": "64b8b8b2314d244af686d23f",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "persoional",
          "date": "2023-07-21T06:46:42.962Z",
          "__v": 0
        },
      ]

      const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
