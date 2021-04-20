import axios from 'axios';
import { API_KEY } from './constants';


const retrieveRecommendation = (type, id) => {
    if (typeof id !== 'number') throw new TypeError(id + ' is not a id')
    if (typeof type !== 'string') throw new TypeError(type + ' is not a valid type')
    if (!type.trim().length) throw new Error('type is empty or blank')
    if (type !== 'movie' && type !== 'tv') throw new Error('type is not movie or tv')
    
    return axios.get(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`)
        .then(response => {
            const results = response.data.results
            return results
        })
}

export default retrieveRecommendation;