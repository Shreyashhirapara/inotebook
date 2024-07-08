import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "668780f3012b7e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "6687da2c18d74d77dc3c22bc",
          "user": "66854d618efd48715787162a",
          "title": "new note",
          "description": "Please access the playlist",
          "tag": "youtube",
          "date": "2024-07-05T11:34:04.499Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial);


    return (
        <NoteContext.Provider value={{notes, setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;