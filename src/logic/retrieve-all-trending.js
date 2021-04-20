import axios from 'axios';
import { API_KEY } from './constants';


const retrieveAllTrending = () => {
    return axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
        .then(response => {
            console.log(response.data.results)
            const data = response.data.results
            return data
        })
}

export default retrieveAllTrending;