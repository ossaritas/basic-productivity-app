import { useState, useContext } from "react";
import { Route, Switch, NavLink, Redirect } from "react-router-dom";

import AuthContext from "../../store/auth-context";
import Todos from "../Todo/Todos";
import Countdowns from "../Countdown/Countdowns";
import Profile from "./Profile";
import Card from "../UI/Card";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  navLink: {
    listStyle: "none",
    textDecoration: "none",
    backgroundColor: "red",
    width: "%100",
  },
  mainCont: {
    color: "yellow",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App(props) {
  const ctx = useContext(AuthContext);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  // let text;
  // let navL = (
  //   <NavLink className={classes.navLink} to="todo">
  //     {text}
  //   </NavLink>
  // );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.mainCont}>Productivity App</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawer}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[
            { name: "Home", path: "/home", icon: <HomeIcon /> },
            { name: "Profile", path: "/home/profile", icon: <PersonIcon /> },
          ].map((text, index) => (
            <ListItem
              button={true}
              component={NavLink}
              to={text.path}
              activeClassName="Mui-selected"
              exact
              key={text.name}
            >
              {/*  */}
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {[
            {
              name: "Todo's",
              path: "/home/to-do",
              icon: <FormatListBulletedIcon />,
            },
            {
              name: "Countdown",
              path: "/home/countdown",
              icon: <HourglassEmptyIcon />,
            },
          ].map((text, index) => (
            <ListItem
              button={true}
              component={NavLink}
              to={text.path}
              activeClassName="Mui-selected"
              exact
              key={text.name}
            >
              {/*  */}
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[{ name: "Logout", path: "/", icon: <ExitToAppIcon /> }].map(
            (text, index) => (
              <ListItem
                button={true}
                component={NavLink}
                to={text.path}
                onClick={props.logout}
                key={text.name}
              >
                {/*  */}
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Switch>
          <Route path="/home" exact>
            <h1 style={{ textAlign: "center" }}>
              <Card
                name={"Tasks"}
                completed={ctx.todos.length}
                quote={"'Don't stop until you are proud'"}
                path={"/main/to-do"}
              />
              <Card
                name={"Countdowns"}
                completed={ctx.countFormData.length}
                quote={"'The best is yet come'"}
                path={"/main/countdown"}
              />
            </h1>
          </Route>
          <Route path="/home/profile" exact>
            <Profile />
          </Route>
          <Route path="/home/to-do" exact>
            <Todos />
          </Route>
          <Route path="/home/countdown" exact>
            <Countdowns />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </main>
    </div>
  );
}
