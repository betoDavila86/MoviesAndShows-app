import axios from 'axios';
import { API_KEY } from './constants';


const retrievePopularShows = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            // console.log(response.data.results)
            const results = response.data.results
            return results
        })
        .catch(error => 'There has been a problem :(')
}

export default retrievePopularShows;
