import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import UserCard from './UserCard'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const FollowList = (props) => {
  const classes = useStyles();
    return(
      <div className={classes.root}>
        {/* console.log(props) */}
      <Grid item xs={12}>
                  {props.myFollowers.map(follower =>{
                    return (
                      <Card className={classes.card}>



                              <h1>{props.myFollowers.name}</h1>

                              <CardMedia
                                component="img"
                                alt="followers"
                                height="240"
                                image={props.myFollowers.avatar_url}
                                title = "profile pic" />
                              <CardContent>
                                 <Typography gutterBottom variant="h5" component="h2">
                              {props.myFollowers.login}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              {props.myFollowers.location}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              {props.myFollowers.bio}
                              </Typography>
                              </CardContent>
                              <Button>{props.myFollowers.followers} Followers</Button>



                      </Card>
                    )
                  })}
                </Grid>
      </div>
    )
  }

export default FollowList;
