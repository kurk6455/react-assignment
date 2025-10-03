import { useContext } from "react"
import { NotesContext } from "../utility/NotesContext"

export const DeleteConfirmation = ({ setIsConfirmDelete, title, id }) => {
    const contextValue = useContext(NotesContext);
    const { deleteNote } = contextValue.action;

    return (
        <>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 dark:bg-black/60">
                <div className="p-4 rounded-xl bg-white shadow-lg text-gray-900 
                  dark:bg-gray-800 dark:text-gray-100">
                    <div className="mb-3">Are you sure you want to delete? <b>{title}</b></div>
                    <div className="flex gap-2">
                        <button onClick={() => setIsConfirmDelete(prev => false)} className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 
                         dark:bg-gray-600 dark:hover:bg-gray-700 dark:text-gray-100">
                            Restore
                        </button>
                        <button onClick={() => { deleteNote(id); setIsConfirmDelete(false) }} className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white 
                         dark:bg-red-600 dark:hover:bg-red-700">
                            Confirm Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}