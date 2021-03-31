import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { Grid, GridList } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import commit from "../../asset/img/icon-comment.svg";
import demoapi from "axios/api"; //引入api
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3c5754",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: "NotoSansCJKtc",
    flexGrow: 1,
    width: "100%",
  },
  text: {
    fontFamily: "NotoSansCJKtc",
    color: "#232323",
    height: "48px",
    lineheight: "1.5",
    fontSize: "16px",

    textAlign: "center",
  },
  button: {
    backgroundColor: "#00d04c",
    width: "100%",

    fontSize: "16px",
    textAlign: "center",
    height: "48px;",
    color: "white",
  },
  iconImg: {
    heigh: "112",
    width: "112",

    margin: "187px 149.5px 16px",
    display: "block",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    padding: "5%",
  },
}));

export default function CollectPage() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <ThemeProvider theme={lightTheme}>
          <AppBar position="static">
            <Toolbar>
              <Link to={{ pathname: "/home" }}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <ArrowBackIcon style={{ color: "white" }} />
                </IconButton>
              </Link>
              <Typography variant="h6" className={classes.title}>
                步道評論
              </Typography>
            </Toolbar>
          </AppBar>

          <Grid>
            <div className={classes.img}>
              <img src={commit} className={classes.iconImg} />
            </div>
            <div className={classes.text}>必須先登入可以收藏並查看喜愛步道</div>

            <Button
              variant="contained"
              component="a"
              href="/signin"
              className={classes.button}
            >
              登入
            </Button>
          </Grid>
        </ThemeProvider>
      </div>
    </>
  );
}
