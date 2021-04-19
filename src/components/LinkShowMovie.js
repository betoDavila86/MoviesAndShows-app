import { Link } from '@material-ui/core';

const linkShowMovie = (props) => {

    const styledLinks = {
        display: 'flex',
        justifyContent: 'space-evenly',
        cursor: 'pointer'
    }

    return (
        <div style={styledLinks}>
            <Link color='inherit' onClick={props.onOpenShows} >TV Shows</Link>
            <Link color='inherit' onClick={props.onOpenMovies}>Movies</Link>
        </div>
    );

}
export default linkShowMovie;