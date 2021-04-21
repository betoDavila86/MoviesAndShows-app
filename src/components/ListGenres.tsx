import { MouseEventHandler } from 'react';

type Props = {
    genres: any[],
    onGenre: MouseEventHandler
}

const listGenre = ({ genres, onGenre }: Props) => {

    return (
        <div className="list-group list-group-flush col-1.5 m-4">
            {genres.map(genre => {
                return <button key={genre.id} onClick={() => onGenre(genre.id)} type="button" className="list-group-item list-group-item-action bg-dark text-white border-white">
                    {genre.name}
                </button>
            })}
        </div>
    );
}
export default listGenre;
