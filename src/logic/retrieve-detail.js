import axios from 'axios';
import { API_KEY } from './constants';


const retrieveDetail = (type, id) => {
    return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            const data = response.data
            return data
        })
        .catch(error => 'There has been a problem :(')
}

export default retrieveDetail;