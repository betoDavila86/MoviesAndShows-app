import { MouseEventHandler } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import noImg from '../assets/no-img.png'

export type FixMeLater = any;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        cursor: 'pointer',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

type Props = {
    detailInfo: any,
    onDetail: MouseEventHandler
}

const LinearGrid = ({ detailInfo, onDetail }: Props) => {
    // console.log(detailInfo)
    const classes = useStyles();

    return (
        <>
            <div>
                <h3>Similar titles</h3>
            </div>
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={3.5}>
                    {detailInfo.map((tile: any) => (
                        <GridListTile key={tile.id} onClick={() => {
                            if (tile.name)
                                // @ts-ignore
                                return onDetail('tv', tile.id)
                            else if (tile.original_title)
                                // @ts-ignore
                                return onDetail('movie', tile.id)
                        }}>
                            {tile.poster_path !== null ?
                                <img src={`https://image.tmdb.org/t/p/w500${tile.poster_path}`} alt={tile.name || tile.original_title} /> :
                                <img src={noImg} alt={tile.name || tile.original_title} />}
                            <GridListTileBar
                                title={tile.name || tile.original_title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.name || tile.original_title}`}>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </>
    );
}

export default LinearGrid;
