import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
  const host = "http://localhost:5000"
    const notesInitial = []
      const [notes, setnotes] = useState(notesInitial);

      // Get all Notes
      const getNotes = async ()=>{
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,  {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NTRkNjE4ZWZkNDg3MTU3ODcxNjJhIn0sImlhdCI6MTcyMDA4NzI4OX0.qvKk4vGSF1L555tWJsQdkPDPQyuTVtM5eZ9Od4eKuuo"
          }
        });
        const json = await response.json()
        console.log(json)
        setnotes(json);

      }

      // Add a Note
      const addNote = async (title, description, tag)=>{
        // TODO: API Call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`,  {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NTRkNjE4ZWZkNDg3MTU3ODcxNjJhIn0sImlhdCI6MTcyMDA4NzI4OX0.qvKk4vGSF1L555tWJsQdkPDPQyuTVtM5eZ9Od4eKuuo"
          },
          body: JSON.stringify({title, description, tag})
        });

        console.log("Adding a new note")
        console.log(response);
        const note = {
          "_id": "668780f3012b7e1cd1b30232",
          "user": "66854d618efd48715787162a",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2024-07-05T05:13:23.360Z",
          "__v": 0
        };
        setnotes(notes.concat(note))
        // setnotes((notes) => (Array.isArray(notes) ? notes.concat(note) : [note]));
      }

      // Delete a Note
      const deleteNote = async (id)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,  {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NTRkNjE4ZWZkNDg3MTU3ODcxNjJhIn0sImlhdCI6MTcyMDA4NzI4OX0.qvKk4vGSF1L555tWJsQdkPDPQyuTVtM5eZ9Od4eKuuo"
          }
        });
        const Json = response.json();
        console.log(Json);
      
        console.log("Deleting the note with id" + id);
        const newNote = notes.filter((note)=>{return note._id!==id})
        setnotes(newNote)
      }
      // Edit a Note
      const editNote = async (id, title, description, tag)=>{
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,  {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
          },
          body: JSON.stringify({title, description, tag})
        });
        const Json = response.json();
        console.log(Json);
      
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++){
          const element = notes[index];
          if(element._id === id){
            element.title = title;
            element.description = description;
            element.tag = tag;
          }
        }
      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;