import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import dayjs from 'dayjs';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '350px',
    margin: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    objectFit: 'contain',
    width: '350px'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const RecipeCard = ({ recipe }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formatDate = (date) => dayjs(date).format('MMM D, YYYY')

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        }
        title={recipe.title}
        subheader= {formatDate(recipe.created_at)}
      />
 
        <CardMedia
          className={classes.media}
          image={recipe.image ? recipe.image :  "https://source.unsplash.com/featured/?food"}
          />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       

        {/* saving this so we can add a share feature someday :)  */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}


        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}

      </CardActions>

      {/* this will be optional based on props */}

      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {steps.map(step => {
          return <Typography paragraph>{step.step}</Typography>
            })}     
        </CardContent>
      </Collapse> */} 

    </Card>
  );
}

export default RecipeCard