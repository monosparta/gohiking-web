import {
    AppBar
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GPSMapLink from 'components/GPSMapLink/GPSMapLink';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import '../../assets/css/slick.css';
import fontStyle from '../../assets/jss/fontStyle';
import {
    infoColor
} from '../../assets/jss/material-kit-pro-react';
import basicStyle from '../../assets/jss/basicStyle';
import darkTheme from '../../config/darkTheme';
import { pathwayInfo } from '../../data/pathway';
// import axios from "axios";
import demoapi from "axios/api";
// import react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const style = {
    ...fontStyle,
    ...basicStyle
}

const useStyles = makeStyles(style);

const Trailhead = () => {

    const history = useHistory();
    const classes = useStyles();
    const [trailhead, setTrailhead] = useState([]);
    const [banner, setBanner] = useState([]);

    const bannerCarousel = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    const pathwayCarousel = {
        dots: false,
        arrows: false,
        variableWidth: true,
        swipeToSlide: true,
        swipe: true,
        infinite: false
    };

    // GET API
    const getAPI = async() => {
        await demoapi.get("/api/trailHead/1")
        .then((response) => {
            console.log('response', response)
            console.log('response.data', response.data);
            setTrailhead(response.data);
            setBanner(response.data[0].bannerImage);
        })
        .catch(function (error){
            console.log('====error==== ',error);
        })
    }

    // useLayoutEffect(() => {
    //     getAPI();
    // });

    const firstUpdate = useRef(false);
    useLayoutEffect(() => {
        if (!firstUpdate.current) {
            console.log('prepare to initial!');
            getAPI();
            firstUpdate.current = true;
            return;
        }
        console.log('finish');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trailhead]);

    console.log(trailhead);
    // console.log(trailhead[0].bannerImage);
    // if (trailhead === undefined) {
    //     return <>Still loading...</>;
    // }

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={classes.root}>
                <Slider className={classes.slider} {...bannerCarousel}>
                    {banner.map((img, i) => (
                        <div key={i}>
                            <img src={img} alt={'slider img'} className={classes.sliderImg} />
                        </div>
                    ))}
                </Slider>
                <AppBar className={classes.appBarTransparent}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="back to previous page" onClick={() => { history.goBack(); }}>
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography className={classes.titleText}>登山口</Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.sectionPaper} style={{ marginBottom: 64 }}>
                    <Typography className={classes.titleXLL}>{pathwayInfo.trailhead[0].name}</Typography>
                    <Typography className={classes.descText}>{pathwayInfo.trailhead[0].description}</Typography>
                    <Divider className={classes.divider} />
                    <Typography className={classes.titleXLL}>其他登山口</Typography>
                    <Slider className={classes.slider} {...pathwayCarousel}>
                        {pathwayInfo.trailhead.map((entry, i) => (
                            <div key={i}>
                                <Button 
                                    variant={'contained'}
                                    style={{ backgroundColor: infoColor[1] }}
                                    component={Link} to={'/trailhead'}
                                    className={classes.defaultButton}
                                    disableElevation
                                >
                                    {entry.name}
                                </Button>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className={classes.bottomNavigation} style={{ padding: '8px 16px', textAlign: 'center' }}>
                    <Button variant="contained" color="secondary" fullWidth style={{ maxWidth: 1440, height: 48 }} disableElevation>
                        <GPSMapLink
                            destination={pathwayInfo.name + pathwayInfo.trailhead[0].name}
                            text={
                                <Typography className={`${classes.mainText} ${classes.boldFont}`}>
                                    打開GPS路線
                                </Typography>
                            }
                        />
                    </Button>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Trailhead;