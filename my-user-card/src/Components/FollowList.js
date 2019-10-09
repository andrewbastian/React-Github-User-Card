import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 345,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

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

                  {props.myFollowers.map(follower =>{
                    console.log('Follower', follower);
                    return (
                      <Paper>
                      <Card
                        key={follower.id}
                        className={classes.card}>



                              <h1>{follower.login}</h1>

                              <CardMedia
                                component="img"
                                alt="followers"
                                height="140"
                                width="140"
                                image={follower.avatar_url}
                                title = "profile pic" />
                              <CardContent>
                                 <Typography gutterBottom variant="h5" component="h2">
                              {follower.node_id}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              {follower.location}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              {follower.bio}
                              </Typography>
                              </CardContent>


                      </Card>
                      </Paper>
                    )
                  })}

      </div>
    )
  }

export default FollowList;
