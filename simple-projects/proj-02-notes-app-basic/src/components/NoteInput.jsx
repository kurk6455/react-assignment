import { useEffect, useState } from "react"


export const NoteInput = ({ notes, editId, setIsEditing, createNote, updateNote }) => {
    let isNew = false;
    if(editId === null) isNew = true;


    const [note, setNote] = useState({});
    useEffect(() => {
        if (isNew) {
            setNote({
                id: Date.now(),
                title: "",
                content: "",
                pinned: false,
            });
        } else {
            setNote(() => notes.find(note => note.id === editId));
        }
    }, [editId])

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        setTitle(note.title);
        setContent(note.content);
    }, [note])




    return (
        <>
            <textarea rows="1" col="50" value={title} onChange={(e) => setTitle(e.target.value)}></textarea>
            {/* <p>{note.createdAt}</p> */}
            <textarea rows="10" col="50" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            {isNew ? <button onClick={() => {
                createNote({
                    id: note.id,
                    title: title,
                    content: content,
                    pinned: false,
                });
                setIsEditing(false);
            }}>Save</button> :
                <button onClick={() => {
                    updateNote({
                        id: note.id,
                        title: title,
                        content: content,
                        pinned: note.pinned,
                        createdAt: note.createdAt
                    });
                    setIsEditing(false);
                }}>Update</button>}
        </>
    )
}