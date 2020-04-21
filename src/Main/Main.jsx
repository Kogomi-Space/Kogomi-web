import React from 'react';
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
import {Link, Route, Switch, withRouter} from 'react-router-dom';

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
    const classes = useStyles();
    let state = {};
    function handleClick(name){
        // console.log("name",name);
        state[name] = !state[name];
        // console.log("State",state);
    };
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
                            drawer.hasOwnProperty('children') ? (
                                <div>
                                    <ListItem button key={drawer.name} onClick={() => handleClick(drawer.name)}>
                                        <ListItemIcon>{drawer.icon}</ListItemIcon>
                                        <ListItemText primary={drawer.name} />
                                        {console.log(drawer.name,state[drawer.name])}
                                        {state[drawer.name] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )}
                                    </ListItem>
                                    <Collapse
                                        component="li"
                                        in={state[drawer.name]}
                                        timeout="auto"
                                        unmountOnExit >
                                        <List disablePadding >
                                            {drawer.children.map(
                                                nDrawer => {
                                                    return (
                                                        <ListItem
                                                            button
                                                            className={classes.content} >
                                                            <ListItemText
                                                                primary={nDrawer.name} />
                                                        </ListItem>
                                                    )
                                                }
                                            )}
                                        </List>
                                    </Collapse> {" "}
                                </div>
                            ) : (
                                <ListItem button key={drawer.name}>
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
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                    facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                    tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                    consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
                    vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
                    hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
                    tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
                    nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
                    accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
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
