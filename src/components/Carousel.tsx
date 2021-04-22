import { MouseEventHandler } from 'react'
// @ts-ignore
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
// @ts-ignore
import { Slide } from 'material-auto-rotating-carousel';
import { grey } from '@material-ui/core/colors';

export type FixMeLater = any;

type Props = {
    data: any[],
    view: Boolean,
    onClose: MouseEventHandler,
    onDetail: MouseEventHandler
}
const Carousel = ({ data, view, onClose, onDetail }: Props) => {


    return (
        <div style={{ position: 'relative', width: '100%', height: 500 }}>
            <AutoRotatingCarousel
                // label='More...'
                open={view}
                onClose={onClose}
                style={{ position: 'absolute' }}
                interval={3000}
            >
                {data.map((result: any) => {
                    return <Slide
                        key={result.id}
                        media={<img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} alt='img' />}
                        mediaBackgroundStyle={{ backgroundColor: grey[700] }}
                        style={{ backgroundColor: grey[900], cursor: 'pointer' }}
                        title={result.name || result.original_title}
                        subtitle={`Vote avg.: ${result.vote_average}`}
                        onClick={() => {
                            if (result.name)
                                // @ts-ignore
                                return onDetail('tv', result.id)
                            else if (result.original_title)
                                // @ts-ignore
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