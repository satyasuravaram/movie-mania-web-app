import React from 'react'
import { SearchBar } from '../components/SearchBar/SearchBar'
import './Landing.css'

export const Landing = () => {
    return (
        <div className="landing-container">
            <h1 className="landing-header">
                Learn more about your favorite movies
            </h1>
            <SearchBar />
        </div>
        
    )
}
