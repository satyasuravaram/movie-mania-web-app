import React, {useState, useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { MovieInfo } from '../components/MovieInfo/MovieInfo'
import { SearchBar } from '../components/SearchBar/SearchBar'
import axios from 'axios'
import './SearchResults.css'

const REACT_APP_ENDPOINT = process.env.REACT_APP_ENDPOINT

export const SearchResults = () => {
    let history = useHistory()
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const query = searchParams.get('query')
    const page = searchParams.get('page')
    const [results, setResults] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [totalResultsArr, setTotalResultsArr] = useState([])
    const [displayLimit, setDisplayLimit] = useState(10)
    const [modalShow, setModalShow] = React.useState(false);
    const [activeMovieID, setMovieID] = React.useState({});

    useEffect(() => {  
        const getResults = async() => {
            const response = await axios.get(`${REACT_APP_ENDPOINT}&s=${query}&page=${page}&type=movie&plot=full`)
            if (response.data.Search === undefined) {
                setResults([])
                setTotalResults(0)
                setTotalResultsArr([])
                return
            }
            setResults(response.data.Search)
            setTotalResults(response.data.totalResults)
            let arr = []
            for (let i = 1; i <= Math.ceil(response.data.totalResults/displayLimit); i++)
                arr.push(i)
            setTotalResultsArr(arr)
          } 
          if (query !== "undefined" )
            getResults()
          else {
            setResults([])
            setTotalResults(0)
            setTotalResultsArr([])
          }
    }, [query, page, displayLimit])

    return (
        <div className="results-container">
            <div className="results-searchbar">
                <SearchBar defaultValue={query}/>
            </div>

            {results.length > 0 &&
                <div className="results-info">
                    <div>
                        Displaying results {(page-1)*10+1}-{Math.min(page*10, totalResults)} out of {totalResults}
                    </div> 
                    <div>
                        <label for="page">Page:&nbsp;</label>
                        <select 
                        onChange={(e) => {
                            history.push(`/search?query=${query}&page=${e.target.value}`)
                        }}
                        id="page" 
                        name="page">
                            {totalResultsArr.map((pageNum, index) => {
                                if (page === pageNum.toString())
                                    return (<option value={pageNum} selected>{pageNum}</option>)
                                else
                                    return (<option value={pageNum}>{pageNum}</option>)
                            })}
                        </select>
                    </div>
                </div>   
            }

            {results.length > 0 ? results.map((movie, index) => (
                <div className="movieTitle-card" onClick={() => {
                    setMovieID(movie.imdbID)
                    setModalShow(true)
                }}>
                    <div className="movieTitle">{movie.Title} ({movie.Year})</div>
                </div>
            )) : 
                <div className="noresults-div">
                    No movie results found for title: "{query}"
                </div>
            }

            <MovieInfo 
                movieID={activeMovieID}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <br /><br />
        </div>
    )
}
