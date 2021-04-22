import './App.css';
import { useState, useEffect } from 'react';
import Spinner from './components/Spinner'
import Carousel from './components/Carousel';
import Detail from './components/Detail'
import LinearGrid from './components/LinearGrid'
import SimpleGrid from './components/SimpleGrid'
import SimpleAlert from './components/SimpleAlert'
import Footer from './components/Footer'
import ListGenres from './components/ListGenres'
import LinkShowMovie from './components/LinkShowMovie'
import MovieIcon from '@material-ui/icons/Movie';
// import Header from './components/Header'

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
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    retrieveAllTrending()
      .then(data => {
        setIsLoading(false)
        setTrending(data)
      })
      .catch(error => {
        setIsLoading(false)
        feedbackMessage()
      })
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
    setIsLoading(true)
    retrievePopularShows()
      .then(results => {
        setResults(results)
        setIsLoading(false)
        setView(true)
        setDetail(false)
      })
      .catch(error => {
        setIsLoading(false)
        feedbackMessage()
      })
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

  let simpleGrid;
  if (isLoading)
    simpleGrid = <Spinner />
  else
    simpleGrid = <SimpleGrid onDetail={(type, id) => handleGoToDetail(type, id)} data={trending} />

  let carousel;
  if (isLoading)
    carousel = <Spinner />
  else
    carousel = <Carousel data={results} view={view} onClose={handleCloseModal} onDetail={(type, id) => handleGoToDetail(type, id)} />

  return (
    <div className="App">
      {/* <Header onOpenShows={handleOpenShows} onOpenMovies={handleOpenMovies} onGoToLanding={handleGoToLanding} /> */}
      <div className="d-flex justify-content-around align-items-center bg-dark py-2">
        <h1 style={{ cursor: 'pointer' }} onClick={handleGoToLanding}>Shows and Movies app <MovieIcon fontSize='large' /></h1>
        <LinkShowMovie onOpenShows={handleOpenShows} onOpenMovies={handleOpenMovies} />
      </div>
      {error && <SimpleAlert severity='error' >There was an error :(</SimpleAlert>}
      <div className="d-flex justify-content-between">
        {genres && !detail && <ListGenres genres={genres} onGenre={(id) => handleMoviesWithGenres(id)} />}
        {trending && !detail && simpleGrid}
      </div>
      {results && view && carousel}
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
