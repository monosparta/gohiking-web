import React, { Fragment, useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography,IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CardActionArea } from "@material-ui/core";
import axios from "axios";
import QuickList from "../../components/Lists/QuickList";
import BackArrow from "../../components/TopBar/BackArrow";
import family from "../../asset/img/icon-family.png";
import mapple from "../../asset/img/icon-mapple.png";
import chellenge from "../../asset/img/icon-chellenge.png";
import hotSpring from "../../asset/img/icon-hot-spring.png";
import forest from "../../asset/img/icon-forest.png";
import sakura from "../../asset/img/icon-sakura.png";

import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  mask: {
    boxShadow: "none",
    backgroundColor: "#ffeddc",
    objectFit: "cover",
    height: 176,
    position: "relative",
  },
  collectionContent: {
    marginTop: 61,
    position: "relative",
    padding: 8,
    height: 120,
    overflow: "hidden",
  },
  title: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    marginTop: "-1px",
  },
  descText: {
    color: "black",
    padding: 8,
    lineHeight: 1.5,
    letterSpacing: 0.5,
    fontSize: 14,
  },

  list: {
    padding: "5%",
  },
  backArrow: {
    color: "#232323",
  },

  iconImg: {
    position: "absolute",
    right: 0,
    bottom: -40,
    width: 142,
    height: 142,
    overflow: "hidden",
  },
}));

const api = axios.create({
  baseURL: "https://go-hiking-backend-laravel.herokuapp.com/",
  headers: {
    "X-Secure-Code": "12345678",
  },
});

const obj = {
  "mapple.png": mapple,
  "chellenge.png": chellenge,
  "hotSpring.png": hotSpring,
  "family.png": family,
  "forest.png": forest,
  "sakura.png": sakura,
};

function SearchQuick(props) {
  const classes = useStyles();
  const id = props.match.params.id;
  const history = useHistory();
  //搜尋結果hook
  const [searchQuick, setSearchQuick] = useState([]);

  const searchApi = async (id) => {
    await api.get("/api/collection/" + id).then((res) => {
      setSearchQuick(res.data);
    });
  };
  useEffect(() => {
    searchApi(id);
  }, [id]);

  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.mask} position="static">
          <Toolbar
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              
            }}
          >
            <IconButton
              edge="start"
              className={classes.backArrow}
              aria-label="back to previous page"
              onClick={() => {
                history.goBack();
              }}
          
            >
              <BackArrow />
            </IconButton>
          </Toolbar>
       
          <div className={classes.collectionContent}>
            <Typography className={classes.title}>
              {searchQuick.name}步道
            </Typography>
            <Typography className={classes.descText}>
              老少咸宜，生活好去處。
            </Typography>
            <img
              src={ [searchQuick.iconImage]}
              className={classes.iconImg}
              
            />
          </div>
        </AppBar>

        <Grid className={classes.list}>
          {/* 步道list component */}
          <QuickList data={searchQuick.trails} />
        </Grid>
      </div>
    </>
  );
}

export default SearchQuick;
