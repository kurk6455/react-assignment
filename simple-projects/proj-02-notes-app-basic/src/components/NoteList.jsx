import { NoteItem } from "./NoteItem"

export const NoteList = ( {notes, editNote, deleteNote} )=> {

    return (
        <>
            {notes.map( (note => {
                return <NoteItem key={note.id} note={note} editNote={editNote} deleteNote={deleteNote}/>
            }))}
        </>
    )
}