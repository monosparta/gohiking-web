import React, { Fragment, useState, useEffect } from "react";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import {
  Avatar,
  Backdrop,
  Button,
  Dialog,
  Divider,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import AvatarUploadDialog from "components/Dialog/AvatarUploadDialog";
import AvatarUploadDialogLogic from "components/Dialog/AvatarUploadDialogLogic";
import Select from "@material-ui/core/Select";
import { countryInfo } from "../../data/countryInfo";
import PersonalPageLogic from "./personalPageLogic";
import { useHistory } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  top_bar_bg_color: {
    backgroundColor: "#3c5754",
    height: 56
  },
  textfield_container: {
    marginTop: 15,
    background: "white"
  },
  title: {
    flexGrow: 1,
    marginLeft: 32
  },
  avatar: {
    width: 96,
    height: 96
  },
  gridMargin: {
    marginTop: 32
  },
  textfield: {
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 24,
    flexGrow: 1,
    width: "100%"
  },
  textfield_phone: {
    marginTop: 8,
    marginBottom: 8,
    flexGrow: 1,
    width: "100%"
  },
  textLabel: {
    paddingLeft: 15
  },
  finishButton: {
    padding: 0,
    paddingLeft: 40
  },
  avatarOverlay: {
    position: "absolute",
    bottom: 0,
    height: "20%",
    width: "100%",
    backgroundColor: "black",
    textAlign: "center",
    verticalAlign: "middle",
    lineHeight: "150%",
    color: "white",
    fontSize: 12,
    opacity: "80%"
  },
  avatarContainer: {
    background: "yellow",
    width: 96,
    height: 96,
    position: "relative",
    borderRadius: "50% 50%",
    margin: 0,
    padding: 0,
    zIndex: 100,
    overflow: "hidden"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function EditAccount(props) {
  const history = useHistory();
  const pData = props.location.state.pData;
  const {
    personalInfo,
    handleNameChange,
    handleSexChange,
    handleTelChange,
    handleBirthChange,
    handleCountyChange,
    updateInfo,
    isLoading,
    validations
  } = PersonalPageLogic(pData);
  const croppedImage =
    props.location.state === undefined
      ? null
      : props.location.state.croppedImage;
  const {
    isOpen,
    openDialog,
    closeDialog,
    inputRef,
    triggerImageInput
  } = AvatarUploadDialogLogic();
  const collectData = async () => {
    const data = {
      name: personalInfo.name,
      gender: personalInfo.gender === "男" ? 1 : 0,
      phone_number: personalInfo.phone_number,
      birth: personalInfo.birth,
      croppedImage: croppedImage,
      image: personalInfo.profile_photo_url,
      county: personalInfo.county.name
    };
    const apiResult = await updateInfo(1, data);
    if (apiResult == 200)
      history.push({
        pathname: "/personalPage"
      });
  };
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#3c5754" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            個人檔案
          </Typography>
          <Button
            className={classes.finishButton}
            color="inherit"
            edge="end"
            onClick={() => {
              if (!validations.nameValidation && !validations.genderValidation && !validations.phoneValidation) {
                console.log("yay");
                collectData();
              }
            }}
          >
            完成
          </Button>
        </Toolbar>
      </AppBar>
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="flex-start"
        className={classes.gridMargin}
      >
        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justify="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <div className={classes.avatarContainer}>
              <Avatar
                // alt="Profile Picture"
                src={
                  croppedImage ? croppedImage : personalInfo.image
                }
                className={classes.avatar}
              />
              <div
                class={classes.avatarOverlay}
                onClick={() => {
                  openDialog();
                }}
              >
                更換
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            alignItems="center"
            justify="flex-start"
            spacing={0.5}
          >
            <>
              <Grid item xs={12}>
                <Typography variant="h7" style={{ color: "#919191" }}>
                  {personalInfo.email ? personalInfo.email : "loading"}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div style={{ height: 32 }} />
              </Grid>
            </>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          container
          direction="column"
          alignItems="center"
          justify="flex-start"
        >
          <Grid
            item
            xs={12}
            container
            direction="row"
            alignItems="center"
            justify="flex-start"
            className={classes.textfield_container}
            spacing={0}
          >
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                姓名
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="姓名"
                error={validations.nameValidation ? true : false}
                helperText={
                  validations.nameValidation ? validations.nameValidation : ""
                }
                className={classes.textfield}
                onChange={handleNameChange}
                inputProps={{
                  value: personalInfo.name
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                性別
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                error={validations.genderValidation ? true : false}
                helperText={
                  validations.genderValidation
                    ? validations.genderValidation
                    : ""
                }
                placeholder="性別"
                onChange={handleSexChange}
                className={classes.textfield}
                inputProps={{
                  value: personalInfo.gender
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                國碼
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <NativeSelect
                labelId="country-code"
                id="country-code"
                style={{ width: "30%" }}
                className={classes.textfield}
                inputProps={{}}
              >
                {countryInfo.map(info => (
                  <option
                    key={info.countryCode + info.countryName}
                    value={info.phoneCode}
                  >
                    {info.phoneCode}
                  </option>
                ))}
              </NativeSelect>
              <TextField
                id="standard-basic"
                placeholder="手機"
                error={validations.phoneValidation ? true : false}
                helperText={
                  validations.phoneValidation ? validations.phoneValidation : ""
                }
                style={{ width: "70%" }}
                className={classes.textfield_phone}
                onChange={handleTelChange}
                inputProps={{
                  value: personalInfo.phone_number
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                生日
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="生日"
                className={classes.textfield}
                type="date"
                onChange={handleBirthChange}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  value: personalInfo.birth
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                居住地
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                id="standard-basic"
                placeholder="居住地"
                onChange={handleCountyChange}
                className={classes.textfield}
                inputProps={{
                  value: personalInfo.county ? personalInfo.county.name : ""
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AvatarUploadDialog
        isOpen={isOpen}
        triggerImageInput={triggerImageInput}
        closeDialog={closeDialog}
        inputRef={inputRef}
        pData={personalInfo}
      />
      <Backdrop className={classes.backdrop} open={isLoading}>
        <ClipLoader color={"#36CAAD"} loading={isLoading} size={150} />
      </Backdrop>
    </div>
  );
}

export default EditAccount;
