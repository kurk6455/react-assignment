import { createContext } from "react";
import { useEffect, useState, useReducer } from "react";
import { notesReducer } from './reducer';

export const NotesContext = createContext(null);

export const NotesContextProvider = ({ children }) => {
    //States ..
    const initialValue = [
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
    ]
    const [notes, dispatch] = useReducer(notesReducer, [], () => JSON.parse(localStorage.getItem("notes")) || initialValue);

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
        // get: () => {
        //     console.log("Getting local storage data");
        //     try {
        //     } catch (e) {
        //         console.log("Can't load local storage note");
        //     }
        // },

        set: (notes) => {
            try{
                console.log("Setting local storage");
                localStorage.setItem("notes", JSON.stringify(notes));
            }catch(e){
                console.log("Unable to store notes "+e);
            }
        }
    }
    useEffect(() => {
        storage.set(notes);
    }, [notes])



    //Utility function (action)
    const createNote = (note) => {
        dispatch({
            type: "CREATE_NOTE",
            note: note
        })
    }
    const updateNote = (note) => {
        dispatch({
            type: "UPDATE_NOTE",
            note: note
        })
    }
    const deleteNote = (id) => {
        dispatch({
            type: "DELETE_NOTE",
            id: id
        })
    }
    const editNote = (id) => {
        if (id === null) setEditId(null)
        else setEditId(id);

        setIsEditing(true);
    }
    const pinNote = (id) => {
        dispatch({
            type: "PIN_NOTE",
            id: id
        })
    }


    const contextValue = {
        state: { notes, isEditing, editId, query, searchFilter, darkMode },
        action: { setIsEditing, setEditId, setSearchFilter, setQuery, setDarkMode, createNote, updateNote, deleteNote, editNote, pinNote }
    }
    return (
        <NotesContext.Provider value={contextValue} >
            {children}
        </NotesContext.Provider>
    )
}