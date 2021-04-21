import './App.css';
import { useState, useEffect } from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import Spinner from './components/Spinner'
import Carousel from './components/Carousel'
import LinkShowMovie from './components/LinkShowMovie'
import Detail from './components/Detail'
import LinearGrid from './components/LinearGrid'
import SimpleGrid from './components/SimpleGrid'
import SimpleAlert from './components/SimpleAlert'
import Footer from './components/Footer'
import ListGenres from './components/ListGenres'

import retrievePopularShows from './logic/retrieve-popular-shows'
import retrievePopularMovies from './logic/retrieve-popular-movies'
import retrieveDetail from './logic/retrieve-detail'
import retrieveRecommendation from './logic/retrieve-recommendations'
import retrieveAllTrending from './logic/retrieve-all-trending'
import retrieveGenres from './logic/retrieve-genres'
import retrieveMoviesWithGenres from './logic/retrieve-movies-with-genres';

function App() {
  const [results, setResults] = useState()
  const [trending, setTrending] = useState()
  const [genres, setGenres] = useState()
  const [infoDetail, setInfoDetail] = useState()
  const [infoRecommendation, setInfoRecommendation] = useState()
  const [view, setView] = useState(true)
  const [detail, setDetail] = useState(false)
  const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    retrieveAllTrending()
      .then(data => {
        setTrending(data)
        // setIsLoading(false)
      })
      .catch(error => feedbackMessage())
  }, [])

  useEffect(() => {
    retrieveGenres()
      .then(genres => setGenres(genres))
      .catch(error => feedbackMessage())
  }, [])

  const feedbackMessage = () => {
    setError(true);
    setTimeout(() => {
      setError(false)
    }, 5000);
  }


  const handleOpenShows = () => {
    retrievePopularShows()
      .then(results => {
        setResults(results)
        setView(true)
        setDetail(false)
      })
      .catch(error => feedbackMessage())
  }

  const handleOpenMovies = () => {
    retrievePopularMovies()
      .then(results => {
        setResults(results)
        setView(true)
        setDetail(false)
      })
      .catch(error => feedbackMessage())
  }

  const handleCloseModal = () => {
    setView(false)
  }

  const handleGoToDetail = (type, id) => {
    retrieveDetail(type, id)
      .then(data => {
        setInfoDetail(data)
        setDetail(true)
        setView(false)
      })
      .then(() => {
        retrieveRecommendation(type, id)
          .then(results => {
            setInfoRecommendation(results)
          })
          .catch(error => feedbackMessage())
      })
      .catch(error => feedbackMessage())

  }

  const handleMoviesWithGenres = genreId => {
    retrieveMoviesWithGenres(genreId)
      .then(results => {
        setResults(results)
        setView(true)
        setDetail(false)
      })
      .catch(error => feedbackMessage())
  }

  const handleGoToLanding = () => {
    setDetail(false)
  }

  return (
    <div className="App">
      <div className="d-flex justify-content-around align-items-center bg-dark text-light py-2">
        <h1 style={{ cursor: 'pointer' }} onClick={handleGoToLanding}>Shows and Movies app <MovieIcon fontSize='large' /></h1>
        <LinkShowMovie onOpenShows={handleOpenShows} onOpenMovies={handleOpenMovies} />
      </div>
      {error && <SimpleAlert severity='error' >There was an error :(</SimpleAlert>}
      <div className="d-flex justify-content-evenly">
        {genres && !detail && <ListGenres genres={genres} onGenre={(id) => handleMoviesWithGenres(id)} />}
        {trending && !detail && <SimpleGrid onDetail={(type, id) => handleGoToDetail(type, id)} data={trending} />}
      </div>
      {results && view && <Carousel data={results} view={view} onClose={handleCloseModal} onDetail={(type, id) => handleGoToDetail(type, id)} />}
      {detail && infoDetail && infoRecommendation &&
        <div>
          <Detail detailInfo={infoDetail} />
          {infoRecommendation.length ? <LinearGrid detailInfo={infoRecommendation} onDetail={(type, id) => handleGoToDetail(type, id)} /> : <SimpleAlert severity='info' >Sorry, no more alternatives were found similar to this title.</SimpleAlert>}
        </div>}
      <Footer />
    </div>

  );
}

export default App;
