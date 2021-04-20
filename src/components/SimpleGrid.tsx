import { MouseEventHandler } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export type FixMeLater = any;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop: '25px',
    },
    gridList: {
        width: 625,
        height: 550,
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
            <h3 style={{ color: 'inherit', marginTop: '40px' }}>Week's Trend</h3>
            <div className={classes.root}>
                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                    {data.map((tile) => (
                        <GridListTile onClick={() => {
                            if (tile.name)
                                // @ts-ignore
                                return onDetail('tv', tile.id)
                            else if (tile.original_title)
                                // @ts-ignore
                                return onDetail('movie', tile.id)
                        }} key={tile.id} cols={tile.cols || 1}>
                            <img src={`https://image.tmdb.org/t/p/w500${tile.backdrop_path}`} alt={tile.name || tile.original_title} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </>
    );
}

export default SimpleGrid;
