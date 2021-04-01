import AppBar from '@material-ui/core/AppBar';
//import IconButton from '@material-ui/core/IconButton/IconButton';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// @material-ui icons
// core components
import basicStyle from 'assets/jss/basicStyle';
import AnnouncementCard from "../../components/AnnouncementCard/AnnouncementCard";
import { pathwayInfo } from 'data/pathway';
import React from 'react';
import { useHistory } from 'react-router-dom';
import fontStyle from '../../assets/jss/fontStyle';
import {ThemeProvider} from '@material-ui/core/styles';
import darkTheme from '../../config/darkTheme';
const style = {
    ...basicStyle,
    ...fontStyle,
};
const useStyles = makeStyles(style);

const Attraction = () => {
    const history = useHistory();
    const classes = useStyles();
    const attrData = pathwayInfo.announcement;

    //return to 7.0 page
    function backhandleClick() {
        history.push("./pathway");
    }
    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                        <ArrowBackIcon className={classes.arrow} onClick={backhandleClick} />
                        <Typography className={classes.titleText}>步道消息</Typography>
                    </Toolbar>
                </AppBar>
                <div className={classes.basicPaper} >
                    {attrData.map((news, i) => (
                        <AnnouncementCard
                            pathLink={news.link}
                            coverImage={news.img}
                            title={news.title}
                            date={news.date}
                            source={news.source}
                            key={i}
                        />
                    ))}
                </div>
            </ThemeProvider>
       </>
    );
};

export default Attraction;
