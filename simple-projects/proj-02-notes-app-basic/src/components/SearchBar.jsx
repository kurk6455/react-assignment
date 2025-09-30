import { useState } from "react"

export const SearchBar = ({query, setQuery}) => {

    return (
        <>
            <input type="text" placeholder="Search notes..." onChange={(e) => setQuery(e.target.value)} value={query}/>
            <button onClick={ () => setSearchFilter(query)}>🔍</button>
        </>
    )
}