import { NotesContext} from '../utility/NotesContext'
import { NoteInput } from './NoteInput'
import { SearchBar } from './SearchBar'
import { NoteList } from './NoteList'
import { useContext } from 'react'


export function NotesApp() {
  const contextValue = useContext(NotesContext);
  const {isEditing, darkMode} = contextValue.state;
  const {editNote, setDarkMode} = contextValue.action;

  console.log("inside Notesap component " +isEditing);
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
        {!isEditing && <SearchBar />}

        {!isEditing ? <NoteList /> : <NoteInput />}
        {!isEditing && <button onClick={() => setDarkMode( prev => !prev)} className='fixed right-6 bottom-20 w-12 h-12 rounded-full bg-slate-500 hover:bg-slate-600 text-white text-2xl flex items-center justify-center shadow-xl transition'> {darkMode ? "🌑" : "🌞"}</button>}
        {!isEditing && <button onClick={() => editNote(null)} className='fixed right-6 bottom-6 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-2xl flex items-center justify-center shadow-xl transition'>➕</button>}

      </div>
  )
}