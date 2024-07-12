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
        console.log(json);
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

        const note = await response.json();
        setnotes(notes.concat(note))
        
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
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NTRkNjE4ZWZkNDg3MTU3ODcxNjJhIn0sImlhdCI6MTcyMDA4NzI4OX0.qvKk4vGSF1L555tWJsQdkPDPQyuTVtM5eZ9Od4eKuuo"
          },
          body: JSON.stringify({title, description, tag})
        });
        const Json = await response.json();
        console.log(Json);
      
        let newNotes = JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < notes.length; index++){
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;
          }
        }
        // console.log(notes);
        setnotes(newNotes);
      }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;