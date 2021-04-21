import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin: '42px auto',
    fontSize: '2rem'
  },
}));

type Props = {
  children: String,
  severity: String
}

const SimpleAlert = ({ children, severity }: Props) => {
  const classes = useStyles();

  let alertMessage;

  if (severity === 'error')
    alertMessage = <Alert severity="error">{children}</Alert>
  else if (severity === 'warning')
    alertMessage = <Alert severity="warning">{children}</Alert>
  else if (severity === 'info')
    alertMessage = <Alert severity="info">{children}</Alert>
  else if (severity === 'success')
    alertMessage = <Alert severity="success">{children}</Alert>

  return (
    <div className={classes.root}>
      {alertMessage}
    </div>
  );
}

export default SimpleAlert;

