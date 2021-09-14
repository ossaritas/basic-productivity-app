import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F5F9E9",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    color: "#131616",
  },
  pos: {
    marginBottom: 12,
    color: "#36453B",
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          How many {props.name} do you have
        </Typography>
        <Typography variant="h5" component="h2">
          {props.completed}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.name}
        </Typography>
        <Typography variant="body2" component="p">
          {bull}
          <br />
          {props.quote}
          <br />
          {bull}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          component={NavLink}
          to={props.path}
        >
          My {props.name}
        </Button>
      </CardActions>
    </Card>
  );
}
