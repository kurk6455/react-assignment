import { NoteItem } from "./NoteItem"

export const NoteList = ( {searchFilter, editNote, deleteNote, pinNote} )=> {

    return (
        <>
            {searchFilter.map( (note => {
                return <NoteItem key={note.id} note={note} editNote={editNote} deleteNote={deleteNote} pinNote={pinNote}/>
            }))}
        </>
    )
}