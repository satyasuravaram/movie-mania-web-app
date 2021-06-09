import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './MovieInfo.css'

const REACT_APP_ENDPOINT = process.env.REACT_APP_ENDPOINT

export const MovieInfo = (props) => {

    const [results, setResults] = useState({})
    useEffect(() => {  
        const getResults = async() => {
            const response = await axios.get(`${REACT_APP_ENDPOINT}&i=${props.movieID}`)
            setResults(response.data)
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
                {results.Poster !== "N/A" &&
                    <img className="movie-poster" src={results.Poster} alt="movie-poster" />
                }
                
                <h6>Release Date</h6>
                <p>{results.Released}</p>

                <h6>Runtime</h6>
                <p>{results.Runtime}</p>

                <h6>Genre</h6>
                <p>{results.Genre}</p>

                <h6>Director(s)</h6>
                <p>{results.Director} </p>

                <h6>Actors</h6>
                <p>{results.Actors}</p>

                <h6>Rated</h6>
                <p>{results.Rated}</p>

                <h6>Awards</h6>
                <p>{results.Awards}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button id="close-button" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}