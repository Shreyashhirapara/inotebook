import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "668780f3012b711e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "6687820f3012b71e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "668780f3012b713e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "668780f3012b471e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "668780f3012b71e16cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "668780f30125b71e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
        {
          "_id": "668780f3012b71e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        },
      ]
      const [notes, setnotes] = useState(notesInitial);


      // Add a Note
      const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "668780f3012b71e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        };
        setnotes(notes.concat(note))
      }
      // Delete a Note
      const deleteNote = ()=>{

      }
      // Edit a Note
      const editNote = ()=>{

      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;