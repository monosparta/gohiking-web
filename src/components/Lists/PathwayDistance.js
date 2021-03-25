import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
// import styles from 'assets/jss/material-kit-pro-react/components/pathwayStyle.js';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { Checkbox, Divider } from '@material-ui/core';
import Favorite from '@material-ui/icons/Favorite';
import Grid from "@material-ui/core/Grid";
import ButtonBase from '@material-ui/core/ButtonBase';
//import styles from '../../assets/jss/material-kit-pro-react/components/pathwayStyle';
//import { whiteColor } from 'assets/jss/material-kit-pro-react';
//Custom the Button theme
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from "@material-ui/core/styles"
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
const styles = {
    gridcontain: {
        marginRight: "-15px",
        marginLeft: "-15px",
        width: "100%",
    },
    gridItem: {
        position: "relative",
        width: "auto",
        height: "auto",
        margin: "16px 0 0 0",
        /* flexBasis: "auto" */
    },
    mediaFooter: {
        fontSize: '14px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: '#919191'
    },
    mediaDistance: {
        fontSize: '12px',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: '#919191'
    },
    limitText: {
        fontSize: "16px",
        width: '38vw',
    },
    img: {
        width:'250px',
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    favorite: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: "#ffffff"
    },
    Rectangle: {
        fontSize: "12px",
        width: "100px",//need to be fix
        backgroundColor: "rgba(0, 208, 76, 0.1)",
        minHeight: 32,
    },
    root: {
        width: '100%',
    }
};

const useStyles = makeStyles(styles);

export default function PathwayCard(props) {
    
    const {
        avatar,
        title,
        location,
        miles,
        distance,
        favorite,
        ...rest
    } = props;
    const classes = useStyles();
    const [checked, setChecked] = React.useState(favorite);
    const handleChange = () => {
        setChecked(!checked);
    };
    return (
        <div>
            <Grid container className={classes.gridcontain} spacing={2} spacing={2} direction='row'
                justify='center'
                alignItems='center'

            >
                <Grid item className={classes.gridItem} xs={4}>
                    <ButtonBase >
                        <img className={classes.img} src={avatar}  />
                        <Checkbox
                            data-testid='checkFavorite'
                            checked={checked}
                            onChange={handleChange}
                            icon={<FavoriteBorder fontSize={'small'} />}
                            checkedIcon={<Favorite fontSize={'small'} />}
                            className={classes.favorite}
                            name='favorite' />
                    </ButtonBase>
                </Grid>
                <Grid component={'span'} item xs={5}>
                    <Typography noWrap className={classes.mediaHeading}>{title}</Typography>
                    <Typography className={classes.mediaFooter}>{location}</Typography>
                    <Typography className={classes.mediaDistance}>全程約 {miles} km</Typography>
                </Grid>
                <Grid item xs={3}>
                <ThemeProvider theme={theme}>
                        <Button
                            fullWidth
                            size='small'
                            variant='outlined'
                            color="primary"
                            className={classes.Rectangle}
                            startIcon={<LocationOnIcon />}
                        >
                            {miles} km
                    </Button>
                </ThemeProvider>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
            </Grid>
        </div>
    );
}

PathwayCard.propTypes = {
    pathLink: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.node,
    location: PropTypes.node,
    miles: PropTypes.node,
};
