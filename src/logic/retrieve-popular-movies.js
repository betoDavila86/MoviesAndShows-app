import axios from 'axios';
import { API_KEY } from './constants';


const retrievePopularMovies = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            // console.log(response.data.results)
            const results = response.data.results
            return results
        })
}

export default retrievePopularMovies;
