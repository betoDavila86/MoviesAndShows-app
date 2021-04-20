import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import noImg from '../assets/no-img.png'

const useStyles = makeStyles({
    root: {
        maxWidth: 550,
        margin: '20px auto'
    },
    media: {
        height: 300,
    },
});

const Detail = (props) => {
    const classes = useStyles();
    //   console.log(props.detailInfo)

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.detailInfo.poster_path !== null ? `https://image.tmdb.org/t/p/w500${props.detailInfo.poster_path}` : noImg}
                    title={props.detailInfo.original_title || props.detailInfo.name}
                />
                <CardContent style={{ overflow: 'scroll' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.detailInfo.original_title || props.detailInfo.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.detailInfo.overview}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                    </Button>
            </CardActions>
        </Card>

    );
}
export default Detail;