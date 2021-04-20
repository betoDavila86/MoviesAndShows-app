import axios from 'axios';
import { API_KEY } from './constants';


const retrieveDetail = (type, id) => {
    if (typeof id !== 'number') throw new TypeError(id + ' is not a id')
    if (typeof type !== 'string') throw new TypeError(type + ' is not a valid type')
    if (!type.trim().length) throw new Error('type is empty or blank')
    if (type !== 'movie' && type !== 'tv') throw new Error('type is not movie or tv')

    return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            const data = response.data
            return data
        })
        .catch(error => 'Something went bad :(')
}

export default retrieveDetail;