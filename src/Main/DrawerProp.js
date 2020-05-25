import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import {menu} from "./menuItems";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const DrawerProp = (classes) => {
    console.log(classes)
    let history = useHistory();
    const [state, changeState] = useState({});
    function handleClick(name){
        changeState({...state,[name]: !state[name]});
    };
    function handleLinkClick(link){
        if (link !== history.location.pathname){
            history.push(process.env.PUBLIC_URL + link)
        }
    }
    return (
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
    );
}

export default DrawerProp;
