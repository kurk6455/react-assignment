import { useReducer } from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";

export const NotesContext = createContext(null);

export const NotesContextProvider = ({ children }) => {
    //States ..
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "React Basics",
            content: "Learned about useState, useEffect today. Explored component lifecycle and hooks.",
            pinned: false,
            createdAt: "30 Sept. 10:53PM",
            createdIso: "2025-09-30T22:53:00Z",
            updatedAt: null,
            updatedIso: null,
        },
        {
            id: 2,
            title: "Ideas for Project",
            content: "Build a Notes App with search & dark mode. Add offline support and reminders.",
            pinned: true,
            createdAt: "30 Sept. 10:53PM",
            createdIso: "2025-09-30T22:53:00Z",
            updatedAt: null,
            updatedIso: null,
        },
        {
            id: 3,
            title: "JavaScript ES6 Features",
            content: "Reviewed arrow functions, destructuring, and async/await.",
            pinned: false,
            createdAt: "29 Sept. 8:15PM",
            createdIso: "2025-09-29T20:15:00Z",
            updatedAt: "30 Sept. 9:00AM",
            updatedIso: "2025-09-30T09:00:00Z",
        },
        {
            id: 4,
            title: "Meeting Notes",
            content: "Discuss project deadlines and assign tasks for next sprint.",
            pinned: true,
            createdAt: "28 Sept. 2:00PM",
            createdIso: "2025-09-28T14:00:00Z",
            updatedAt: null,
            updatedIso: null,
        },
        {
            id: 5,
            title: "Bug Fixes",
            content: "Fixed issue with token refresh and UI flickering on load.",
            pinned: false,
            createdAt: "27 Sept. 4:30PM",
            createdIso: "2025-09-27T16:30:00Z",
            updatedAt: null,
            updatedIso: null,
        },
        {
            id: 6,
            title: "Learning Tailwind CSS",
            content: "Explored utility-first classes, responsive design, and dark mode handling.",
            pinned: false,
            createdAt: "26 Sept. 11:25AM",
            createdIso: "2025-09-26T11:25:00Z",
            updatedAt: null,
            updatedIso: null,
        }
    ])
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);  //stores the current Id needed for editing purpose only
    //Searching State and Logic
    const [query, setQuery] = useState("");
    const [searchFilter, setSearchFilter] = useState([...notes]);
    useEffect(() => {
        setSearchFilter([...notes]);
    }, [notes])
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
    //Dark mode State and Logic
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) document.getElementById('root').classList.add('dark');
        else document.getElementById('root').classList.remove('dark');
    }, [darkMode])



    //local storage logic...
    const storage = {
        get: () => {
            console.log("Getting local storage data");
            try{
                setNotes( JSON.parse(localStorage.getItem("notes")) || []);
            }catch(e){
                console.log("Can't load local storage note");
            }
        },

        set: (notes) => {
            console.log("Setting local storage");
            localStorage.setItem("notes", JSON.stringify(notes));
        }
    }
    useEffect(() => {
        storage.set(notes);
    }, [notes])


    //Disply to console for error perspective...
    useEffect(() => {
        console.log(notes);
    }, [notes])
    useEffect(() => {
        console.log(isEditing);
    }, [isEditing])
    useEffect(() => {
        console.log(query);
    }, [query])



    //Utility function (action)
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

        pinnedNotes.sort((a, b) => getSortDate(b) - getSortDate(a));
        console.log("Pinned notes : " + pinnedNotes);
        unpinnedNotes.sort((a, b) => getSortDate(b) - getSortDate(a));

        return [...pinnedNotes, ...unpinnedNotes];
    }

    const contextValue = {
        state: { notes, isEditing, editId, query, searchFilter, darkMode },
        action: { setNotes, setIsEditing, setEditId, setSearchFilter, setDarkMode, createNote, updateNote, deleteNote, editNote, pinNote }
    }
    return (
        <NotesContext.Provider value={contextValue} >
            {children}
        </NotesContext.Provider>
    )
}