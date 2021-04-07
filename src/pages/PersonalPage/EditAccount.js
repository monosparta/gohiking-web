import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Backdrop,
  Button,
  CircularProgress,
  Divider,
  Grid,
  NativeSelect
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AvatarUploadDialog from "components/Dialog/AvatarUploadDialog";
import AvatarUploadDialogLogic from "components/Dialog/AvatarUploadDialogLogic";
import PersonalPageLogic from "./personalPageLogic";
import { useHistory } from "react-router";

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
  if (props.location.state === undefined) {
    history.push({
      pathname: "/personalPage"
    });
  }
  const pData = props.location.state ? props.location.state.pData : {};
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
  console.log(personalInfo);
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
      name: personalInfo.users.name,
      gender: personalInfo.users.gender === "男" ? 1 : 0,
      phone_number: personalInfo.users.phone_number,
      birth: personalInfo.users.birth,
      croppedImage: croppedImage,
      image: personalInfo.users.image,
      county: personalInfo.users.county.name,
      countryCode: document.getElementById("country-code").value
    };
    const apiResult = await updateInfo(data);
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
            color="inherit"
            aria-label="back"
            onClick={() => history.push({ pathname: "/personalPage" })}
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
              if (
                !validations.nameValidation &&
                !validations.genderValidation &&
                !validations.phoneValidation
              ) {
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
                  croppedImage
                    ? croppedImage
                    : personalInfo.users
                    ? personalInfo.users.image
                    : ""
                }
                className={classes.avatar}
                alt=""
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
                  {personalInfo.users ? personalInfo.users.email : "loading"}
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
                  value: personalInfo.users ? personalInfo.users.name : ""
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
                  value: personalInfo.users ? personalInfo.users.gender : ""
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" className={classes.textLabel}>
                國碼
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <div className={classes.textfield}>
                <NativeSelect
                  labelId="country-code"
                  id="country-code"
                  style={{ width: "30%" }}
                  className={classes.textfield}
                >
                  <option
                    key={"default"}
                    value={
                      personalInfo.countrycodes[
                        personalInfo.users.country_code_id - 1
                      ].id
                    }
                  >
                    {
                      personalInfo.countrycodes[
                        personalInfo.users.country_code_id - 1
                      ].phone_code
                    }
                  </option>
                  {personalInfo.countrycodes.map(info => (
                    <option
                      key={info.country_code + info.country_name}
                      value={info.id}
                    >
                      {info.phone_code}
                    </option>
                  ))}
                </NativeSelect>
                <TextField
                  id="standard-basic"
                  placeholder="手機"
                  error={validations.phoneValidation ? true : false}
                  helperText={
                    validations.phoneValidation
                      ? validations.phoneValidation
                      : ""
                  }
                  style={{ width: "70%" }}
                  className={classes.textfield_phone}
                  onChange={handleTelChange}
                  inputProps={{
                    value: personalInfo.users
                      ? personalInfo.users.phone_number
                      : ""
                  }}
                />
              </div>
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
                  value: personalInfo.users ? personalInfo.users.birth : ""
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
                  value: personalInfo.users
                    ? personalInfo.users.county
                      ? personalInfo.users.county.name
                      : ""
                    : ""
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
        <CircularProgress />
      </Backdrop>
    </div>
  );
}

export default EditAccount;
