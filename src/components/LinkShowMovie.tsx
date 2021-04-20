import { MouseEventHandler} from 'react'
import { Link } from '@material-ui/core';

type Props = {
    onOpenMovies: MouseEventHandler,
    onOpenShows: MouseEventHandler
}

const linkShowMovie = ({ onOpenShows, onOpenMovies }: Props) => {

    const styledLinksDiv = {
        display: 'flex',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        marginBottom: '40px'
    }

    return (
        <div style={styledLinksDiv}>
            <Link style={{ fontSize: '25px' }} color='inherit' onClick={onOpenShows} >Popular Shows</Link>
            <Link style={{ fontSize: '25px' }} color='inherit' onClick={onOpenMovies}>Popular Movies</Link>
        </div>
    );

}
export default linkShowMovie;