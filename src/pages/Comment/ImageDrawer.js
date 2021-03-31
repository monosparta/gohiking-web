import {
  Box,
  Button,
  Drawer,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
  Select
} from "@material-ui/core";
import { imageLabel } from "data/imageLabel";
import CustomAppBar from "components/TopBar/AppBar";
import React, { useState, useEffect, useRef } from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper.scss";
import TagSelector from "./TagSelector";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "16px"
  },
  gridContainer: {
    marginTop: 69
  },
  swiperContainer: {
    position: "relative",
    maxWidth: "450px",
    "& img": {
      borderRadius: "4px",
      width: "100%",
      height: "280px",
      objectFit: "cover",
      maxWidth: "450px"
    }
  },
  tip: {
    fontSize: 16,
    color: "#979797"
  },
  tipGrid: {
    marginTop: 36,
    paddingRight: 100
  }
}));

export default function ImageDrawer(props) {
  const classes = useStyles();
  const swiperRef = useRef(null);
  const openDrawer = props.openDrawer;
  const toggleDrawer = props.toggleDrawer;
  const files = props.selectedImages;
  const [selectors, setSelectors] = useState([{ tag: 0 }]);
  const [images, setImages] = useState([]);
  const [TagSelectors, setTagSelectors] = useState([]);
  //   const TagSelectors = [];
  // Slides current index
  const [currentIndex, updateCurrentIndex] = useState(0);

  const params = {
    // initialSlide: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    spaceBetween: 30,
    on: {
      slideChange: () => {
        updateCurrentIndex(swiperRef.current.swiper.realIndex);
        console.log(selectors);
      }
    }
  };

  const handleSelector = (index, value) => {
    selectors[index].tag = value;
    setSelectors(selectors);
  };

  useEffect(() => {
    if (files.length < 1) {
      console.log("null");
    } else {
      console.log("yes");
      for (let i = 0; i < files.length; i++) {
        setTagSelectors(e => [...e, <TagSelector index={i} img={files} />]);
        setImages(e => [...e, URL.createObjectURL(files[i])]);
        // setSelectors(e => [...e, { tag: 0 }]);
      }
    }
  }, [files]);

  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => toggleDrawer(false)}
    >
      <div style={{ width: "100vw" }}>
        <CustomAppBar title="選擇標籤" />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          className={classes.gridContainer}
        >
          <Grid item xs={12}>
            <div className={classes.swiperContainer}>
              <Swiper {...params} ref={swiperRef}>
                {images.map(image => (
                  <img src={image} />
                ))}
              </Swiper>
            </div>
          </Grid>

          <Grid item xs={12} className={classes.tipGrid}>
            <Typography className={classes.tip}>
              您已經選擇了{images.length}張照片，請將全部照片放上標籤。
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.mainTextWeight}>標籤</Typography>
            <div className={classes.inputBox}>{TagSelectors[currentIndex]}</div>
          </Grid>
        </Grid>
      </div>
    </Drawer>
  );
}
