import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Modal, Button} from 'react-bootstrap'
import './MovieInfo.css'

const REACT_APP_ENDPOINT = process.env.REACT_APP_ENDPOINT

export const MovieInfo = (props) => {

    const [results, setResults] = useState({})
    useEffect(() => {  
        const getResults = async() => {
            const response = await axios.get(`${REACT_APP_ENDPOINT}&i=${props.movieID}`)
            setResults(response.data)
            console.log(response.data.Poster)
        }
        getResults()
    }, [props.movieID])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {results.Title} ({results.Year})
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {results.Poster !== "N/A" && results.Poster &&
                <img className="movie-poster" src={results.Poster} alt="movie-poster" />
                }
                <h6>Release Date</h6>
                <p>
                {results.Released}
                </p>
                <h6>Runtime</h6>
                <p>
                {results.Runtime}
                </p>
                <h6>Genre</h6>
                <p>
                {results.Genre}
                </p>
                <h6>Director(s)</h6>
                <p>
                {results.Director}
                </p>
                <h6>Actors</h6>
                <p>
                {results.Actors}
                </p>
                <h6>Rated</h6>
                <p>
                {results.Rated}
                </p>
                <h6>Awards</h6>
                <p>
                {results.Awards}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button id="close-button" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

// Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth"
// Awards: "Nominated for 1 Oscar. Another 38 wins & 79 nominations."
// BoxOffice: "$623,357,910"
// Country: "USA"
// DVD: "22 Nov 2015"
// Director: "Joss Whedon"
// Genre: "Action, Adventure, Sci-Fi"
// Language: "English, Russian, Hindi"
// Metascore: "69"
// Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
// Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
// Production: "Marvel Studios"
// Rated: "PG-13"
// Ratings: (3) [{…}, {…}, {…}]
// Released: "04 May 2012"
// Response: "True"
// Runtime: "143 min"
// Title: "The Avengers"
// Type: "movie"
// Website: "N/A"
// Writer: "Joss Whedon (screenplay), Zak Penn (story), Joss Whedon (story)"
// Year: "2012"
// imdbID: "tt0848228"
// imdbRating: "8.0"
// imdbVotes: "1,280,970"