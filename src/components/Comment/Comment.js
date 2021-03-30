import magetty from "../../asset/img/gettyimages-1197742259-2048x2048.jpg";
import React, { useState, useEffect, Fragment } from "react";
import {
  makeStyles,
  ThemeProvider,
  withStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "NotoSansCJKtc",
    flexGrow: 1,
    width: "100%",
  },
  tangle: {
    width: "100%",
    height: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },

  comment: {
    fontWeight: 500,
    fontSize: "14px",
    paddingLeft: "3%",
    paddingRight: "2%",
  },
  commentName: {
    fontWeight: "bold",
    paddingTop: "4%",
    paddingBottom: "4%",
  },
  rating:{
     paddingBottom:"5%",
  },
  commentButton:{
    position: "absolute",
     right:10,
     paddingBottom:3,
     textAlign:"center",
     fontSize:"12px",
  },
  thumbup: {
    paddingRight: "10%",
  },
  thumbupText: {
    fontSize: "14px",
  },
  gridList: {},
  magetty: {
    padding: "2%",
    width: "88px",
    height: "88px",
  },
  time: {
    color: "#979797",
    fontSize: "12px",
  },
  number: {
    paddingLeft: "30%",
  },
}));

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00d04c",
    },
  },
});

export default function Commit(props) {
  const classes = useStyles();
  const data = props.data;
  console.log(data);
  return (
     data.map((comment) => (

      <ThemeProvider theme={lightTheme}>
    <Grid className={classes.comment}>
      <Grid className={classes.commentName}>王陽明</Grid>
      <Rating className={classes.rating} name="size-small" defaultValue={comment.star} />
      <Button className={classes.commentButton} variant="outlined" color="primary">
        覺得輕鬆
      </Button>
    
      <Grid>
        {comment.content}
      </Grid>
      <Grid item xs={12} sm={6}>
        <IconButton className={classes.thumbup}>
          <ThumbUpIcon />
          <Typography className={classes.thumbupText}> {comment.likes}</Typography>
        </IconButton>

        <IconButton  className={classes.thumbup}>
          <ThumbDownIcon />
          
          <Typography className={classes.thumbupText}>{comment.dislikes}</Typography>
        </IconButton>
      </Grid>
      <Grid className={classes.gridList}>
        <img src={magetty} className={classes.magetty} />
        <img src={magetty} className={classes.magetty} />
        <img src={magetty} className={classes.magetty} />
        <img src={magetty} className={classes.magetty} />
      </Grid>
      <Typography className={classes.time}>
        2020-12-25 · 來回時間: 6h 25m
      </Typography>
      <hr />
    </Grid>
    </ThemeProvider>

      ))
  );
}
