import './App.css';
import { useState, useEffect } from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import Spinner from './components/Spinner'
import Carousel from './components/Carousel'
import LinkShowMovie from './components/LinkShowMovie'
import Detail from './components/Detail'
import LinearGrid from './components/LinearGrid'
import SimpleGrid from './components/SimpleGrid'

import retrievePopularShows from './logic/retrieve-popular-shows'
import retrievePopularMovies from './logic/retrieve-popular-movies'
import retrieveDetail from './logic/retrieve-detail'
import retrieveRecommendation from './logic/retrieve-recommendations'
import retrieveAllTrending from './logic/retrieve-all-trending'

function App() {
  const [results, setResults] = useState()
  const [trending, setTrending] = useState()
  const [infoDetail, setInfoDetail] = useState()
  const [infoRecommendation, setInfoRecommendation] = useState()
  const [view, setView] = useState(true)
  const [detail, setDetail] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    retrievePopularShows()
      .then(results => setResults(results))
      .then(() => {
        retrieveAllTrending()
          .then(data => setTrending(data))
          .catch(console.log)
      })
      .catch(console.log)
  }, [])

  // const feedbackMessage = () => {
  //   setError(true)
  // }

  const handleOpenShows = () => {
    retrievePopularShows()
      .then(results => {
        setResults(results)
        setView(true)
        setDetail(false)
      })
      .catch(console.log)
  }

  const handleOpenMovies = () => {
    retrievePopularMovies()
      .then(results => {
        setResults(results)
        setView(true)
        setDetail(false)
      })
      .catch(console.log)
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
      })
      .catch(console.log)

  }

  const handleGoToLanding = () => {
    setDetail(false)
  }

  return (
    <div className="App">
      <h1 style={{ cursor: 'pointer' }} onClick={handleGoToLanding}>Shows and Movies app <MovieIcon fontSize='large' /></h1>
      <LinkShowMovie onOpenShows={handleOpenShows} onOpenMovies={handleOpenMovies} />
      {trending && !detail && <SimpleGrid onDetail={(type, id) => handleGoToDetail(type, id)} data={trending} />}
      {results ?
        <div>
          {view && <Carousel data={results} view={view} onClose={handleCloseModal} onDetail={(type, id) => handleGoToDetail(type, id)} />}
          {detail && infoDetail && infoRecommendation &&
            <div>
              <Detail detailInfo={infoDetail} />
              <h1>Alternatives</h1>
              <LinearGrid detailInfo={infoRecommendation} onDetail={(type, id) => handleGoToDetail(type, id)} />
            </div>}
        </div> : <Spinner />}
    </div>

  );
}

export default App;
