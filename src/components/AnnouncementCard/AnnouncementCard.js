import { Divider } from '@material-ui/core';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from "@material-ui/core/Grid";
import Link from '@material-ui/core/Link';
import ButtonBase from '@material-ui/core/ButtonBase';

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
        margin: "12px 0 0 0",
        /* flexBasis: "auto" */
    },
    titleText:{
        fontSize:"16px",
        color:"#232323"
    },
    mutedText:{
        color:"#979797"
    },
    img: {
        width:'100%',
        height:72,
        objectFit:'cover',
        borderRadius:4,
        minWidth:72
    },
    buttonBase:{
        margin: "0 0 0 16px",
    }
};

const useStyles = makeStyles(styles);

export default function AnnouncementCard(props) {
  const {
    pathLink,
    coverImage,
    coverImageAlt,
    title,
    date,
    source,
    ...rest
  } = props;
  const classes = useStyles();

  return (
    <Link href={pathLink} underline="none">
      <Grid container {...rest} className={classes.gridcontain} spacing={2}
      justify='center'
      alignItems='center'
      >
        <Grid item className={classes.gridItem} xs={3} >
          <ButtonBase className={classes.buttonBase}>
          <img src={coverImage} className={classes.img}/>
          </ButtonBase>
        </Grid>
        <Grid item  xs={9} >
            <Typography className={classes.titleText}>{title}</Typography>
            <small className={classes.mutedText}> {date} | {source} </small>
        </Grid>
        <Grid item  xs={12}>
          <Divider />
        </Grid>
      </Grid>
    </Link>

  );
}

AnnouncementCard.defaultProps = {
  coverImageAlt: 'cover image'
};

AnnouncementCard.propTypes = {
  pathLink: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  coverImageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.node.isRequired,
  source: PropTypes.string.isRequired,
};
