import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { menu } from './menuItems';
import { Route, useHistory } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import ValidatedLoginForm from "../ValidatedLoginForm";

import Dashboard from "./Dashboard";
import Test from "./Test";
import Test2 from "./Test2";
import Osu from "./Osu";
import LoL from "./LoL";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Main = () => {
    let history = useHistory();
    const classes = useStyles();
    function bounce(val) {
        return spring(val, {
            stiffness: 330,
            damping: 22,
        });
    }
    function mapStyles(styles) {
        return {
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`,
        };
    }
    const [state, changeState] = useState({});
    function handleClick(name){
        changeState({...state,[name]: !state[name]});
    };
    function handleLinkClick(link){
        if (link !== history.location.pathname){
            history.push(link)
        }
    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Kogomi
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {menu.map((drawer, index) => (
                            drawer.children ? (
                                <div key={drawer.id}>
                                    <ListItem button key={drawer.id} onClick={() => handleClick(drawer.name)}>
                                        <ListItemIcon>{drawer.icon}</ListItemIcon>
                                        <ListItemText primary={drawer.name} />
                                        {state[drawer.name] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItem>
                                    <Collapse
                                        key={drawer.children.id}
                                        component="li"
                                        in={state[drawer.name]}
                                        timeout="auto"
                                        unmountOnExit >
                                        <List disablePadding>
                                            {drawer.children.map(
                                                nDrawer => {
                                                    return (
                                                        <ListItem button onClick={() => handleLinkClick(drawer.url + nDrawer.url)} className={classes.content} key={nDrawer.id} >
                                                            <ListItemText primary={nDrawer.name} />
                                                        </ListItem>
                                                    )
                                                }
                                            )}
                                        </List>
                                    </Collapse> {" "}
                                </div>
                            ) : (
                                <ListItem button onClick={() => handleLinkClick(drawer.url)} key={drawer.id}>
                                    <ListItemIcon>{drawer.icon}</ListItemIcon>
                                    <ListItemText primary={drawer.name} />
                                </ListItem>
                            )
                        ))}
                    </List>
                    <Divider />
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <AnimatedSwitch
                    atEnter={{ opacity:0, scale:1.2 }}
                    atLeave={{ opacity: bounce(0), scale: bounce(0.8)}}
                    atActive={{ opacity: bounce(1), scale: bounce(1) }}
                    mapStyles={mapStyles}
                    runOnMount
                    className="route-wrapper"
                >
                    <Route exact path={process.env.PUBLIC_URL + "/main"} component={Dashboard} />
                    <Route exact path={process.env.PUBLIC_URL + "/usersettings/sample1"} component={Test} />
                    <Route exact path={process.env.PUBLIC_URL + "/usersettings/sample2"} component={Test2} />
                    <Route exact path={process.env.PUBLIC_URL + "/discordsettings/osu"} component={Osu} />
                    <Route exact path={process.env.PUBLIC_URL + "/discordsettings/LoL"} component={LoL} />
                </AnimatedSwitch>
            </main>
        </div>
    );
    // console.log('props',props);
    // const match = props.match;
    // return(
    //     props.loggedIn ? (
    //
    //     ) : (
    //         <div>
    //             <h2>You must log in first before trying to access this page!</h2>
    //         </div>
    //     ))
}
export default Main;
