import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin: '0 auto',
    fontSize: '2rem'
  },
}));

const SimpleAlert = (props) => {
  const classes = useStyles();
  console.log(props)

  let alertMessage;

  if (props.severity === 'error')
    alertMessage = <Alert severity="error">{props.children}</Alert>
  else if (props.severity === 'warning')
    alertMessage = <Alert severity="warning">{props.children}</Alert>
  else if (props.severity === 'info')
    alertMessage = <Alert severity="info">{props.children}</Alert>
  else if (props.severity === 'success')
    alertMessage = <Alert severity="success">{props.children}</Alert>

  return (
    <div className={classes.root}>
      {alertMessage}
    </div>
  );
}

export default SimpleAlert;

