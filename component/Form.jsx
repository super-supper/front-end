import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/form.module.css';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '50ch',
        display: 'flex',
        flexDirection: 'column',
      },
    },
  }));

const Form = () => {

    const classes = useStyles();

    return (
        <div className={styles.container}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
            </form>
        </div>
    )

}

export default Form

