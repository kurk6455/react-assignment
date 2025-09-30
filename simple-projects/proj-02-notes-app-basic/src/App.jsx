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
      createdAt: "30 Sept. 10:53PM",
      createdIso: null,
      updatedAt: null,
      updatedIso: null
    },
    {
      id: 2,
      title: "Ideas for Project",
      content: "Build a Notes App with search & dark mode",
      pinned: true,
      createdAt: "30 Sept. 10:53PM",
      createdIso: null,
      updatedAt: null,
      updatedIso: null
    }]
  )
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);  //stores the current Id needed for editing purpose only

  const [query, setQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState([...notes]);
  useEffect(() => {
    setSearchFilter([...notes]);
  }, [notes])


  //Disply to console
  useEffect(() => {
    console.log(notes);
  }, [notes])
  useEffect(() => {
    console.log(isEditing);
  }, [isEditing])
  useEffect(() => {
    console.log(query);
  }, [query])




  //Utility function
  function formatedDate() {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hour12 = hours % 12 || 12;
    const paddedMinutes = minutes.toString().padStart(2, '0');

    const display = `${day} ${month}. ${hour12}:${paddedMinutes}${ampm}`;
    const iso = date.toISOString();

    return { iso, display }
  }
  const createNote = (note) => {
    //form validation
    if (note.title === "" || note.content === "") {
      alert("note is empty");
      return;
    }
    const { iso, display } = formatedDate();
    note.createdAt = display;
    note.createdIso = iso;
    setNotes(sortNote([...notes, note]));
  }
  const updateNote = (note) => {
    //Form validation
    if (note.title === "" || note.content === "") {
      alert("note is empty");
      return;
    }

    const newNote = notes.map(n => {
      if (n.id === note.id) {
        const { iso, display } = formatedDate();
        note.updatedAt = display;
        note.updatedIso = iso;
        return note;
      }

      return n;
    })

    setNotes(sortNote(newNote));
  }
  const deleteNote = (id) => {
    const newNote = notes.filter(note => note.id !== id);
    setNotes(newNote);
  }
  const editNote = (id) => {
    if (id === null) setEditId(null)
    else setEditId(id);

    setIsEditing(true);
  }
  const pinNote = (id) => {
    const newNote = notes.map(note => {
      if (note.id === id) {
        return { ...note, pinned: !note.pinned }
      }
      return note;
    })

    setNotes(sortNote(newNote));
  }
  const getSortDate = (note) => new Date(note.updatedIso || note.createdIso);
  const sortNote = (sortedNotes) => {
    console.log("Sorted NOTes array : " + sortedNotes);
    const pinnedNotes = sortedNotes.filter(note => note.pinned === true);
    const unpinnedNotes = sortedNotes.filter(note => note.pinned !== true);

    pinnedNotes.sort((a, b) => new Date(getSortDate(b) || 0) - new Date(getSortDate(a) || 0));
    console.log("Pinned notes : " + pinnedNotes);
    unpinnedNotes.sort((a, b) => new Date(getSortDate(b) || 0) - new Date(getSortDate(a) || 0));

    return [...pinnedNotes, ...unpinnedNotes];
  }
  //searching logic
  useEffect(() => {
    if (query === "") {
      setSearchFilter([...notes]);
      return;
    }

    const searchNotes = notes.filter(note => {
      return (note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase()))
    });
    setSearchFilter(searchNotes);
  }, [query])



  return (
    <>
      <SearchBar query={query} setQuery={setQuery} />

      {!isEditing ? <NoteList searchFilter={searchFilter} deleteNote={deleteNote} editNote={editNote} pinNote={pinNote} /> : <NoteInput notes={notes} createNote={createNote} editId={editId} setIsEditing={setIsEditing} updateNote={updateNote} />}
      {!isEditing && <button onClick={() => editNote(null)}>➕</button>}

    </>
  )
}

export default App
