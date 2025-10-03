    import { formatedDate } from "./formatedDate";

    export const notesReducer = (notes, action) => {
        const getSortDate = (note) => new Date(note.updatedIso || note.createdIso);
        const sortNote = (sortedNotes) => {
            console.log("Sorted NOTes array : " + sortedNotes);
            const pinnedNotes = sortedNotes.filter(note => note.pinned === true);
            const unpinnedNotes = sortedNotes.filter(note => note.pinned !== true);

            pinnedNotes.sort((a, b) => getSortDate(b) - getSortDate(a));
            console.log("Pinned notes : " + pinnedNotes);
            unpinnedNotes.sort((a, b) => getSortDate(b) - getSortDate(a));

            return [...pinnedNotes, ...unpinnedNotes];
        }


        switch (action.type) {
            case "CREATE_NOTE": {
                const { note } = action;

                //form validation
                if (note.title === "" || note.content === "") {
                    alert("note is empty");
                    return notes;
                }
                const { iso, display } = formatedDate();
                note.createdAt = display;
                note.createdIso = iso;

                return sortNote([...notes, note])
            }

            case "UPDATE_NOTE": {
                const { note } = action;

                //Form validation
                if (note.title === "" || note.content === "") {
                    alert("note is empty");
                    return notes;
                }

                const newNote = notes.map(n => {
                    if (n.id === note.id) {
                        const { iso, display } = formatedDate();
                        note.updatedAt = display;
                        note.updatedIso = iso;
                        return note;
                    }

                    return n;
                })

                return sortNote(newNote);
            }

            case "DELETE_NOTE": {
                const { id } = action
                const newNote = notes.filter(note => note.id !== id);
                return newNote;
            }

            case "PIN_NOTE": {
                const { id } = action
                const newNote = notes.map(note => {
                    if (note.id === id) {
                        return { ...note, pinned: !note.pinned }
                    }
                    return note;
                })

                return (sortNote(newNote));
            }

            default: {
                throw Error('Unknown action: ' + action.type);
            }
        }
    }