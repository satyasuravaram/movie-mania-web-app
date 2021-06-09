import React from 'react'
import { SearchBar } from '../components/SearchBar/SearchBar'
import './Landing.css'

export const Landing = () => {
    return (
        <div className="landing-container">
            <div className="landing-header">
                Learn more about your favorite movies
            </div>
            <div>
                <SearchBar />
            </div>
        </div>
        
    )
}
