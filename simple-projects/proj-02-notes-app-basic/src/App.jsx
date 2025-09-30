import { useEffect, useState } from 'react'
import './App.css'
import { NoteInput } from './components/NoteInput'
import { SearchBar } from './components/SearchBar'
import { NoteList } from './components/NoteList'

function App() {
  //States ..
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "React Basics",
      content: "Learned about useState, useEffect today.",
      pinned: false,
      createdAt: "2025-09-29T14:30:00.000Z",
      updatedAt: null
    },
    {
      id: 2,
      title: "Ideas for Project",
      content: "Build a Notes App with search & dark mode",
      pinned: true,
      createdAt: "2025-09-29T15:00:00.000Z"
    }]
  )
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  //Disply to console
  useEffect(() => {
    console.log(notes);
  }, [notes])
  useEffect(() => {
    console.log(isEditing);
  }, [isEditing]);


  //Utility function
  const formatedDate = () => {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const hr = currentDate.getHours();
    const min = currentDate.getMinutes();
    return "" + date + " " + month + "    -    " + hr + ":" + min;
  }
  const createNote = (note) => {
    //form validation
    if (note.title === "" || note.content === "") {
      alert("note is empty");
      return;
    }
    note.createdAt = formatedDate();
    setNotes([...notes, note]);
  }
  const updateNote = (note) => {
    //Form validation
    if (note.title === "" || note.content === "") {
      alert("note is empty");
      return;
    }

    const newNote = notes.map(n => {
      if (n.id === note.id) {
        note.updatedAt = formatedDate();
        return note;
      }

      return n;
    })

    setNotes(newNote);
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }
  const editNote = (id) => {
    if (id === null) setEditId(null)
    else setEditId(id);

    setIsEditing(true);
  }




  return (
    <>
      <SearchBar />

      {!isEditing ? <NoteList notes={notes} deleteNote={deleteNote} editNote={editNote} /> : <NoteInput notes={notes} createNote={createNote} editId={editId} setIsEditing={setIsEditing} updateNote={updateNote} />}
      {!isEditing && <button onClick={() => editNote(null)}>➕</button>}

    </>
  )
}

export default App
