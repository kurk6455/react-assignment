import { useContext } from "react"
import { NoteItem } from "./NoteItem"
import { NotesContext } from "../utility/NotesContext";


export const NoteList = ( )=> {
    const contextValue = useContext(NotesContext);
    const {searchFilter} = contextValue.state;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
            {searchFilter.map( (note => {
                return <NoteItem key={note.id} note={note} />
            }))}
        </div>
    )
}