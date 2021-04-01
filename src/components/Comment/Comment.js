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
import { Grid } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import Button from "@material-ui/core/Button";
import { Checkbox } from "@material-ui/core";
import demoapi from "axios/api";
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
    fontSize:'14px',
    paddingTop: "4%",
    paddingBottom: "4%",
    
  },
  rating: {
    paddingBottom: "5%",
  },
  commentButton: {
    position: "absolute",
    right: 10,
    paddingBottom: 3,
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

  // const a = {...data};
  // console.log(a);
  const [checked, setChecked] = useState(data.like);
  const handleChange = (id) => {
    const uid = localStorage.getItem("userid")
      ? localStorage.getItem("userid")
      : 1;
    setChecked(!checked);
    demoapi
      .post(
        "/api/likeComment/?user_id=" + 1 + "&comment_id=" + 6 + "&status=" + 1
      )
      .then((res) => {
        console.log(res.status);
      });
  };
  const handleChange1 = (id) => {
  
    setChecked(!checked);
    demoapi
      .post(
        "/api/likeComment/?user_id=" +
          1 +
          "&comment_id=" +
          6 +
          "&status=" +
          "-1"
      )
      .then((res) => {
        console.log(res.status);
      });
  };

  // console.log(data[0]);

 
  return data.map((comment) => (
      
    <ThemeProvider theme={lightTheme}>
      <Grid className={classes.comment}>
        <Grid className={classes.commentName}>{comment.username}</Grid>
        <Rating
          className={classes.rating}
          name="size-small"
          defaultValue={comment.rating}
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

        <Grid>{comment.comment}</Grid>
        <Grid item xs={12} sm={6}>
          <IconButton className={classes.thumbup}>
            <Checkbox
              checked={checked}
              onChange={() => {
                handleChange(data.id);
              }}
              icon={<ThumbUpIcon/>}
              checkedIcon={<ThumbUpIcon style={{ color: "#3c5754" }} />}
            />

            <Typography className={classes.thumbupText}>

              {comment.like}
            </Typography>
        </IconButton>

          <IconButton className={classes.thumbup}>
            <Checkbox
              checked={checked}
              onChange={() => {
                handleChange1(data.id);
              }}
              icon={<ThumbDownIcon />}
              checkedIcon={<ThumbDownIcon  style={{ color: "#3c5754" }}/>}
            />

            <Typography className={classes.thumbupText}>
              {comment.dislike}
            </Typography>
          </IconButton>
        </Grid>

        <Grid className={classes.gridList}>
          <img
            src={data[0].comments_images[1].s3_url}
            className={classes.magetty}
          />
        </Grid>
        <Typography className={classes.time}>
          {comment.date}. 來回時間: {Math.round(comment.costTime/60)}h {comment.costTime%60}m 
        </Typography>
        <hr />
      </Grid>
    </ThemeProvider>
));
    

}