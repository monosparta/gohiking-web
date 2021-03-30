import React, { useState, useEffect, Fragment } from "react";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import TrailCard from "../../components/Lists/TrailCard";
import { Grid, GridList } from "@material-ui/core";
import TitleBar from "../../components/TopBar/TitleBar";
import Navigation from "../../components/Bottom/Navigation";
import Button from "@material-ui/core/Button";
import heart from "../../asset/img/icon-heart-broken@3x.png";
import demoapi from "axios/api"; //引入api
const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00d04c",
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
  const [searchResult, setSearchResult] = useState([]);
  const kw = "步道";
  var id = 0;
  if(localStorage.getItem('userId')){
     id= localStorage.getItem('userId'); //取得localstorage ussrId
   }else{
     id = null;  //取不到user Id
   }
   

  useEffect(() => {
    searchApi(kw);
    return () => {
      kw = "";
    };
    //載入完就清空kw，使重新載入頁面時會再發送一次apia請求
  }, [kw]);
  const searchApi = async () => {
    await demoapi
      .get("/api/trail?filters=title:" + kw + "&uuid=1")
      .then((res) => {
        setSearchResult(res.data);
      });
  };
  if(id !=null ) {return (
    <>
      <div className={classes.root}>
        <ThemeProvider theme={lightTheme}>
          <TitleBar title="我的收藏" />
          <Grid item xs={12} container direction="row">
            {/* 步道list component */}

            <GridList cellHeight={72} cols={1} className={classes.list}>
              {searchResult.map((trail) => {
                if (trail.favorite) {
                  return <TrailCard data={trail} />;
                } else {
                  return "";
                }
              })}
            </GridList>
          </Grid>

          <Navigation dfValue={3} />
        </ThemeProvider>
      </div>
    </>
  );}else{
    return (
      <>
        <div className={classes.root}>
          <ThemeProvider theme={lightTheme}>
            <TitleBar title="我的收藏" />
  
            <Grid>
              <div className={classes.img}>
                <img src={heart} className={classes.iconImg} />
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
              <Navigation />
            </Grid>
          </ThemeProvider>
        </div>
      </>
    );
  }
}
