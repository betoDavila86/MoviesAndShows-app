import './App.css';
import { useState, useEffect } from 'react'
import MovieIcon from '@material-ui/icons/Movie';
import axios from 'axios'
import { API_KEY } from './logic/constants'
import Spinner from './components/Spinner'
import Carousel from './components/Carousel'
import LinkShowMovie from './components/LinkShowMovie'
import Detail from './components/Detail'
import Grid from './components/Grid'
// import { Route, BrowserRouter, Switch } from 'react-router-dom'

function App() {

  const [results, setResults] = useState()
  const [infoDetail, setInfoDetail] = useState()
  const [infoRecommendation, setInfoRecommendation] = useState()
  const [view, setView] = useState(true)
  const [detail, setDetail] = useState(false)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        // console.log(response.data.results)
        setResults(response.data.results)
      })
      .catch(console.log)
  }, [])

  const handleOpenShows = () => {
    axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        // console.log(response.data.results)
        setResults(response.data.results)
        setView(true)
        setDetail(false)
      })
      .catch(console.log)
  }

  const handleOpenMovies = () => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        // console.log(response.data.results)
        setResults(response.data.results)
        setView(true)
        setDetail(false)
      })
      .catch(console.log)
  }

  const handleCloseModal = () => {
    setView(false)
  }

  const handleGoToDetail = (type, id) => {
    // console.log(id)
    axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`)
      .then(response => {
        // console.log(response.data)
        setInfoDetail(response.data)
        setDetail(true)
        setView(false)
      })
      .then(() => {
        axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
          .then(response => {
            // console.log(response.data.results)
            setInfoRecommendation(response.data.results)
          })
      })
      .catch(console.log)

  }

  return (
    <div className="App">
      <h1>Shows and Movies app <MovieIcon fontSize='large' /></h1>
      <LinkShowMovie onOpenShows={handleOpenShows} onOpenMovies={handleOpenMovies} />
      {results ?
        <div>
          {view && <Carousel data={results} view={view} onClose={handleCloseModal} onDetail={(type, id) => handleGoToDetail(type, id)} />}
          {detail && infoDetail && infoRecommendation &&
            <div>
              <Detail detailInfo={infoDetail} />
              <h1>Alternatives</h1>
              <Grid detailInfo={infoRecommendation} />
            </div>}
        </div> : <Spinner />}
    </div>

  );
}

export default App;
