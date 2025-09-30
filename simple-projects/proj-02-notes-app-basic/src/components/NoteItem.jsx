
export const NoteItem = ({note, editNote, deleteNote}) => {

    return (
        <div>
            <div>{note.title}</div>
            <div>{note.createdAt}</div>
            <div>{note.content}</div>
            <button onClick={ () => editNote(note.id)}>Edit</button>
            <button onClick={ () => deleteNote(note.id)}>Delete</button>
            <button>Pin</button>
        </div>
    )
}