import { useContext } from "react";
import { useEffect, useState } from "react"
import { NotesContext } from "../utility/NotesContext";


export const NoteInput = () => {
    const { notes, editId, setIsEditing, createNote, updateNote } = useContext(NotesContext);
    let isNew = false;
    if(editId === null) isNew = true;


    const [note, setNote] = useState({});
    useEffect(() => {
        if (isNew) {
            setNote({
                id: Date.now(),
                title: "",
                content: "",
                pinned: false,
            });
        } else {
            setNote(() => notes.find(note => note.id === editId));
        }
    }, [editId])

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setTitle(note.title);
        setContent(note.content);
    }, [note])




    return (
        <div className="flex flex-col gap-3 p-4 rounded-xl bg-gray-50 shadow dark:bg-gray-800 dark:shadow-lg">
            <textarea rows="1" col="50" placeholder="Title..." value={title} onChange={(e) => setTitle(e.target.value)} className="resize-none px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg font-semibold dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"></textarea>
            {/* <p>{note.createdAt}</p> */}
            <textarea rows="10" col="50" placeholder="Start typing..." value={content} onChange={(e) => setContent(e.target.value)} className="resize-none px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 min-h-[120px] dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"></textarea>
            {isNew ? <button onClick={() => {
                createNote({
                    id: note.id,
                    title: title,
                    content: content,
                    pinned: false,
                });
                setIsEditing(false);
            }} className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-sm transition dark:bg-blue-600 dark:hover:bg-blue-700">Save</button> :
                <button onClick={() => {
                    updateNote({
                        id: note.id,
                        title: title,
                        content: content,
                        pinned: note.pinned,
                        createdAt: note.createdAt,
                        createdIso: note.createdIso
                    });
                    setIsEditing(false);
                }} className="mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-sm transition dark:bg-blue-600 dark:hover:bg-blue-700">Update</button>}
            <button onClick={ () => setIsEditing(false)} className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium shadow-sm transition dark:bg-red-600 dark:hover:bg-red-700">Back</button>
        </div>
    )
}