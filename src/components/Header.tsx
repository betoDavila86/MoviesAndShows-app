import { MouseEventHandler } from 'react'
import LinkShowMovie from './LinkShowMovie'
import MovieIcon from '@material-ui/icons/Movie';

type Props = {
    onGoToLanding: MouseEventHandler,
    onOpenShows: MouseEventHandler,
    onOpenMovies: MouseEventHandler
}

const header = ({ onGoToLanding, onOpenShows, onOpenMovies }: Props) => {
    return (
        <div className="d-flex justify-content-around align-items-center bg-dark py-2">
            <h1 style={{ cursor: 'pointer' }} onClick={onGoToLanding}>Shows and Movies app <MovieIcon fontSize='large' /></h1>
            <LinkShowMovie onOpenShows={onOpenShows} onOpenMovies={onOpenMovies} />
        </div>
    );
}

export default header;