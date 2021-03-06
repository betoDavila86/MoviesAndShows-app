import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import noImg from '../assets/no-img.png'

export type FixMeLater = any;

const useStyles = makeStyles({
    root: {
        maxWidth: 750,
        margin: '35px auto 25px auto'
    },
    media: {
        height: 275,
    },
});

type Props = {
    detailInfo: any
}

const Detail = ({ detailInfo }: Props) => {
    const classes = useStyles();
    const { poster_path, original_title, name, overview } = detailInfo

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={poster_path !== null ? `https://image.tmdb.org/t/p/w500${poster_path}` : noImg}
                    title={original_title || name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {original_title || name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {overview}
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