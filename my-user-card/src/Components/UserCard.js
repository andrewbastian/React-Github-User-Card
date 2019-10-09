import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});



const UserCard = (props) => {
  // console.log(props.myData.name)
    const classes = useStyles();
        return (
          <Card className={classes.card}>



                  <h1>{props.myData.name}</h1>

                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="240"
                    image={props.myData.avatar_url}
                    title = "profile pic" />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="h2">
                  {props.myData.login}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {props.myData.location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {props.myData.bio}
                  </Typography>
                  </CardContent>
                  <Button>{props.myData.followers} Followers:</Button>



          </Card>
        )
      }



export default UserCard;
