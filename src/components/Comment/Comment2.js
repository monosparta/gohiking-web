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
    padding:'16px 16px 0 16px',
    // paddingLeft: "3%",
    // paddingRight: "2%",
  },
  commentName: {
    fontWeight: "bold",
    fontSize:'14px',
    marginBottom:'16px',
    // paddingTop: "4%",
    // paddingBottom: "4%",
    
  },
  rating: {
      marginBottom: '16px',
    // paddingBottom: "5%",
  },
  commentButton: {
    position: "absolute",
    right: 10,
    marginLeft:'16px',
    // paddingBottom: 3,
    textAlign: "center",
    fontSize: "12px",
  },
  thumbup: {
    paddingRight: "10%",
  },
  thumbupText: {
    fontSize: "14px",
    marginLeft: 5,
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
//   const data = Array.from(props);
 
  return data.slice(0,2).map((comment) => (
      
    <ThemeProvider theme={lightTheme}>
      <Grid className={classes.comment}>
        <Grid className={classes.commentName}>{comment.user.name}</Grid>
        <Rating
          className={classes.rating}
          name="size-small"
          defaultValue={comment.star}
        />
        <Button
          className={classes.commentButton}
          variant="outlined"
          color="primary"
        >
        { comment.difficulty == 1 &&("非常簡單") }
        { comment.difficulty == 2 &&("簡單") }
        { comment.difficulty == 3 &&("覺得還好") }
        { comment.difficulty == 4 &&("困難") }
        { comment.difficulty == 5 &&("非常困難") } 
        </Button>
        <Grid>{comment.content}</Grid>
        <Grid item xs={12} sm={6}>
          <IconButton className={classes.thumbup}>
            <ThumbUpIcon />
            <Typography className={classes.thumbupText}>         
              {comment.like}
            </Typography>
          </IconButton>

          <IconButton className={classes.thumbup}>
            <ThumbDownIcon />

            <Typography className={classes.thumbupText}>
              {comment.dislike}
            </Typography>
          </IconButton>
        </Grid>
        <Grid className={classes.gridList}>
          {comment.comments_images.map((image,i) =>{
            <div key={i}>
              <img src={magetty} className={classes.magetty} />
            </div>
          })}
        </Grid>
        <Typography className={classes.time}>
          {comment.date}. 來回時間: {Math.round(comment.costTime/60)}h {comment.costTime%60}m 
        </Typography>
        <hr />
      </Grid>
    </ThemeProvider>
));
    

}

