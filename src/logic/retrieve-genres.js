import axios from 'axios';
import { API_KEY } from './constants';


const retrieveGenres = () => {
    return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            // console.log(response)
            const genres = response.data.genres
            return genres
        })
}

export default retrieveGenres;