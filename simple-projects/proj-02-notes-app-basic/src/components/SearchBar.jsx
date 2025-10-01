import '../App.css';

export const SearchBar = ({ query, setQuery }) => {

    return (
        <div className="flex items-center gap-2 my-4 mx-6">
            <input type="text" placeholder="Search notes..." onChange={(e) => setQuery(e.target.value)} value={query} className="flex-1 px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"/>
            <button onClick={() => setSearchFilter(query)} className="ml-2 px-3 py-2 rounded-lg bg-blue-200 hover:bg-blue-300 transition text-blue-900 shadow-sm border border-blue-100">🔍</button>
        </div>
    )
}