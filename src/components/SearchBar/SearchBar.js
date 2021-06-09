import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import './SearchBar.css'

export const SearchBar = (props) => {
    let history = useHistory()

    const inputDefaultValue = props.defaultValue
    const [query, setQuery] = useState()

    return (
        <div className="search-container">
            <form 
            onSubmit={e => {
                e.preventDefault()
                if (query !== undefined && query.length > 0)
                    history.push(`/search?query=${query}&page=1`)
            }}>
                <input 
                type="text" 
                name="searchInput" 
                id="searchInput"
                placeholder="Type a movie title..."
                defaultValue={inputDefaultValue}
                onChange={(e)=>setQuery(e.target.value)} />
                <button id="submitBtn" type="submit">Search</button>
            </form>
        </div>
    )
}