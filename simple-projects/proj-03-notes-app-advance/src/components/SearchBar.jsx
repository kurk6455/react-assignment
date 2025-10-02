import { useContext } from 'react';
import { NotesContext } from '../utility/NotesContext';
import '../App.css';

export const SearchBar = () => {
    const {query, setQuery} = useContext(NotesContext);
    console.log("Inside serach bar compnent "+ query);

    return (
        <div className="flex items-center gap-2 py-8 px-8">
            <input type="text" placeholder="Search notes..." onChange={(e) => setQuery(e.target.value)} value={query} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition 
               dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:placeholder-gray-400" />
            <button onClick={() => setQuery("")}  className="ml-2 px-3 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition shadow-sm dark:bg-blue-600 dark:hover:bg-blue-700">reset</button>
        </div>
    )
}