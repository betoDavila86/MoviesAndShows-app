import axios from 'axios';
import { API_KEY } from './constants';


const retrieveMoviesWithGenres = genreId => {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`)
        .then(response => {
            // console.log(response.data.results)
            const results = response.data.results
            return results
        })
}

export default retrieveMoviesWithGenres;