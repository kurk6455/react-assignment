import { useContext, useState } from "react";
import { NotesContext } from "../utility/NotesContext";
import { DeleteConfirmation } from "./DeleteConfirmation";

export const NoteItem = ({ note }) => {
    const contextValue = useContext(NotesContext);
    const { editNote, pinNote } = contextValue.action;
    const [isConfirmDelete, setIsConfirmDelete] = useState(false);

    const pinnedClass = note.pinned ? "border-blue-500 bg-blue-50 shadow-lg dark:bg-blue-900/30 dark:border-blue-400 dark:shadow-blue-500/20" : "border-gray-200 bg-white shadow-sm hover:shadow-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-md";

    return (
        <>
            {isConfirmDelete && ( <DeleteConfirmation setIsConfirmDelete={setIsConfirmDelete} title={note.title} id={note.id}/>)}

            <div className={`p-4 rounded-xl border transition flex flex-col gap-2 justify-around ${pinnedClass}`}>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-400">{note.title}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">createdAt - {note.createdAt}</div>
                {note.updatedAt && (<div className="text-xs text-gray-500 dark:text-gray-400">updatedAt - {note.updatedAt}</div>)}
                <div className="text-gray-800 dark:text-gray-200 mb-2 break-words">{note.content}</div>

                <div className="flex gap-2 mt-2">
                    <button onClick={() => editNote(note.id)} className="px-3 py-1 rounded bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-white" >Edit</button>
                    <button onClick={() => setIsConfirmDelete(true)} className="px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700 font-medium  dark:bg-red-600 dark:hover:bg-red-700 dark:text-white" >Delete</button>
                    <button onClick={() => pinNote(note.id)} className="px-3 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium  dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white" > {note.pinned ? "Unpin" : "Pin"} </button>
                </div>
            </div>
        </>
    );
};
