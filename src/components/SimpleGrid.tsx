import { MouseEventHandler } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Tooltip from '@material-ui/core/Tooltip';

export type FixMeLater = any;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        backgroundColor: '#212629',
        marginTop: '35px',
        width: '80%'
    },
    gridList: {
        width: 1090,
        height: 700,
        cursor: 'pointer'
    },
}));

type Props = {
    data: any[],
    onDetail: MouseEventHandler
}

const SimpleGrid = ({ data, onDetail }: Props) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <h3 style={{ textAlign: 'left' }}>Week's Trend</h3>
                <GridList cellHeight={200} className={classes.gridList} cols={3}>
                    {data.map((tile) => (
                        <Tooltip key={tile.id} title={tile.original_title || tile.name} placement='bottom'>
                            <GridListTile onClick={() => {
                                if (tile.name)
                                    // @ts-ignore
                                    return onDetail('tv', tile.id)
                                else if (tile.original_title)
                                    // @ts-ignore
                                    return onDetail('movie', tile.id)
                            }} cols={tile.cols || 1}>
                                <img src={`https://image.tmdb.org/t/p/w500${tile.backdrop_path}`} alt={tile.name || tile.original_title} />
                            </GridListTile>
                        </Tooltip>
                    ))}
                </GridList>
            </div>
        </>
    );
}

export default SimpleGrid;
