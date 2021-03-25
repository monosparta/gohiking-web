import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import "./sidebar.scoped.scss";
import Avatar from "@material-ui/core/Avatar";
import Tooltip from "@material-ui/core/Tooltip";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import InfoIcon from "@material-ui/icons/Info";
import demoapi from "../../axios/api"; //引入api

const useStyles = makeStyles({
  list: {
    width: "353px",
    fontFamily: "NotoSansCJKtc",
  },
  fullList: {
    width: "auto",
  },
  iconButton: {
    padding: 0,
    minHeight: 0,
    minWidth: 0,
    margin: 0,
  },
  avater: {
    height: "64px",
    width: "64px",
    marginTop: "10%",
    margin: "0 42px 16px 16px",
  },
  name: {
    margin: "16px 59px 16px 16px",
    fontWeight: "bold",
    fontSize: "18px",
  },
  mail: {
    color: "#919191",
    fontFamily: "Roboto",
    margin: "16px 154px 16px 16px",
    fontSize: "14px",
    lineHeight: "1.43",
  },
  scrim: {
    padding: "10%",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: 1.5,
    height: "48px",
    "&:hover": {
      backgroundColor: "rgba(0, 208, 76, 0.05)",
      color: "#00d04c",
    },
    "&:hover ListItemIcon": {
      color: "#00d04c",
    },
  },

  icon: {
    color: "black",
    fontSize: "24px",
  },
  text: {
    margin: "0 0 0 32px",
  },
  tangle: {
    width: "100%",
    height: "1px",

    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  version: {
    fontSize: "14px",
    fontWeight: "bold",

    marginLeft: "15%",
  },
  versiont: {
    textAlign: "right",

    color: "#919191",
  },
  log: {
    color: "#007aff",
    fontSize: "16px",
    fontWeight: "bold",
    lineHeight: "1.5",
    marginLeft: "14%",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [user, setuser] = useState([]);
  const [state, setState] = useState(false);
  const [anchor] = useState("left");
  var id = 0;
  // var id =null;
  if (localStorage.getItem("userId")) {
    id = localStorage.getItem("userId"); //取得localstorage ussrId
  } else {
    id = 1; //取不到user Id
  }

  const userApi = async (id) => {
    await demoapi.get("/api/user/" + id).then((res) => {
      setuser(res.data.users);
    });
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown") return;
    setState(open);
  };
  useEffect(() => {
    userApi(id);
  }, [id]);

  return (
    <>
      <div className={classes.list} role="presentation">
        {id != null && <Avatar className={classes.avater} src={user.image} />}
        {id != null && <Grid className={classes.name}>{user.name}</Grid>}
        {id != null && <Grid className={classes.mail}>{user.email}</Grid>}
        {id == null && <Avatar className={classes.avater} />}
        {id == null && <Grid className={classes.name}>訪客</Grid>}

        <hr />

        <List component="nav" aria-label="main mailbox folders">
          {id != null && (
            <ListItem button component="a" href="/personalPage" className={classes.scrim}>
              
              <ListItemIcon>
                <PersonIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary="個人檔案" />
            </ListItem>
          )}
          <ListItem
            button
            className={classes.scrim}
            component="a"
            href="/privacyPolicy"
          >
            <ListItemIcon>
              <LockIcon className={classes.icon} />
            </ListItemIcon>

            <ListItemText primary="隱私權政策" />
          </ListItem>
          <ListItem
            button
            className={classes.scrim}
            component="a"
            href="/aboutUs"
          >
            <ListItemIcon>
              <InfoIcon className={classes.icon} />
            </ListItemIcon>

            <ListItemText primary="關於我們" />
          </ListItem>
        </List>

        <hr />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="版本" className={classes.version} />
            <ListItemSecondaryAction className={classes.versiont}>
              <ListItemText primary="1.1.1" />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <hr />
        <List component="nav" aria-label="secondary mailbox folders">
          {id == null && (
            <ListItem button component="a" href="/signin">
              <ListItemText primary="登入" className={classes.log} />
            </ListItem>
          )}

          {id != null && (
            <ListItem button component="a" href="/signin">
              <ListItemText primary="登出" className={classes.log} />
            </ListItem>
          )}
        </List>
      </div>
    </>
  );
}
