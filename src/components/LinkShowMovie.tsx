import { MouseEventHandler} from 'react'
import { Link } from '@material-ui/core';

type Props = {
    onOpenMovies: MouseEventHandler,
    onOpenShows: MouseEventHandler
}

const linkShowMovie = ({ onOpenShows, onOpenMovies }: Props) => {

    const styledLinksDiv = {
        display: 'flex',
        justifyContent: 'space-around',
        cursor: 'pointer',
        width: '55%'
    }

    return (
        <div style={styledLinksDiv}>
            <Link style={{ fontSize: '30px' }} color='inherit' onClick={onOpenShows} >Popular Shows</Link>
            <Link style={{ fontSize: '30px' }} color='inherit' onClick={onOpenMovies}>Popular Movies</Link>
        </div>
    );

}
export default linkShowMovie;