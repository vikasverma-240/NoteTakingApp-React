import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const initialState = {
        "name": "vikas",
        "class": "10b"
    };

    const [state, setState] = useState(initialState);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Rahul",
                "class": "9b"
            });
        }, 1000);
    };

    return (
        <NoteContext.Provider value={{ state:state, update:update }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
