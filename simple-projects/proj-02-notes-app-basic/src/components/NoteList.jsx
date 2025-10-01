import { NoteItem } from "./NoteItem"

export const NoteList = ( {searchFilter, editNote, deleteNote, pinNote} )=> {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
            {searchFilter.map( (note => {
                return <NoteItem key={note.id} note={note} editNote={editNote} deleteNote={deleteNote} pinNote={pinNote}/>
            }))}
        </div>
    )
}