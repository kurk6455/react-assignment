
export const NoteItem = ({ note, editNote, deleteNote, pinNote }) => {

    return (
        <div>
            <div>{note.title}</div>
            <div>createdAt - {note.createdAt}</div>
            {note.updatedAt && <div>updatedAt - {note.updatedAt}</div>}
            <div>{note.content}</div>
            <button onClick={() => editNote(note.id)}>Edit</button>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button onClick={ () => pinNote(note.id)}>Pin</button>
        </div>
    )
}