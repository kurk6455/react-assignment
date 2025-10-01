
export const NoteItem = ({ note, editNote, deleteNote, pinNote }) => {
    const pinnedClass = note.pinned ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-100 bg-white shadow";


    return (
        <div className={`p-4 rounded-xl border hover:shadow-md transition flex flex-col gap-2 ${pinnedClass}`}>
            <div className="text-lg font-bold text-blue-900">{note.title}</div>
            <div className="text-xs text-gray-500">createdAt - {note.createdAt}</div>
            {note.updatedAt && <div className="text-xs text-gray-500">updatedAt - {note.updatedAt}</div>}
            <div className="text-gray-800 mb-2 break-words">{note.content}</div>
            <div className="flex gap-2 mt-2">
                <button onClick={() => editNote(note.id)} className="px-3 py-1 rounded bg-yellow-100 hover:bg-yellow-200 text-yellow-700 font-medium">Edit</button>
                <button onClick={() => deleteNote(note.id)} className="px-3 py-1 rounded bg-red-100 hover:bg-red-200 text-red-700 font-medium">Delete</button>
                <button onClick={() => pinNote(note.id)} className="px-3 py-1 rounded bg-blue-100 hover:bg-blue-200 text-blue-700 font-medium">Pin</button>
            </div>
        </div>
    )
}