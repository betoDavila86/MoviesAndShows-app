import { Link } from '@material-ui/core';

const linkShowMovie = (props) => {

    const styledLinksDiv = {
        display: 'flex',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        marginBottom: '40px'
    }

    return (
        <div style={styledLinksDiv}>
            <Link style={{ fontSize: '25px' }} color='inherit' onClick={props.onOpenShows} >Popular Shows</Link>
            <Link style={{ fontSize: '25px' }} color='inherit' onClick={props.onOpenMovies}>Popular Movies</Link>
        </div>
    );

}
export default linkShowMovie;