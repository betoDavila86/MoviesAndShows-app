import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { Slide } from 'material-auto-rotating-carousel';
const { grey } = require('@material-ui/core/colors');

const Carousel = ({ data, view, onClose, onDetail }) => {

    return (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <AutoRotatingCarousel
                // label='More...'
                open={view}
                onClose={onClose}
                style={{ position: 'absolute' }}
                interval={3000}
            >
                {data.map(result => {
                    return <Slide
                        key={result.id}
                        media={<img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} alt='img' />}
                        mediaBackgroundStyle={{ backgroundColor: grey[400] }}
                        style={{ backgroundColor: grey[600], cursor: 'pointer' }}
                        title={result.name || result.original_title}
                        subtitle={<p>Vote avg.: {result.vote_average}</p>}
                        onClick={() => {
                            if (result.name)
                                return onDetail('tv', result.id)
                            else if (result.original_title)
                                return onDetail('movie', result.id)
                        }
                        }
                    />
                })}
            </AutoRotatingCarousel>
        </div>

    );
}

export default Carousel;