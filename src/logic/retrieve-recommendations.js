import axios from 'axios';
import { API_KEY } from './constants';


const retrieveRecommendation = (type, id) => {
    return axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            const results = response.data.results
            return results
        })
        .catch(error => 'There has been a problem :(')
}

export default retrieveRecommendation;