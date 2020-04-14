import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import USIcon from '@material-ui/icons/AccountCircle';
import DiscordIcon from '@material-ui/icons/ChatBubble'
import StarBorder from '@material-ui/icons/StarBorder';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const MainListItems = ({classes,open,handleClick}) => (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary="Dashboard"/>
        </ListItem>
        <ListItem button onClick={handleClick}>
            <ListItemIcon>
                <USIcon/>
            </ListItemIcon>
            <ListItemText primary="User Settings"/>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItem>
            </List>
        </Collapse>
        <ListItem button>
            <ListItemIcon>
                <DiscordIcon/>
            </ListItemIcon>
            <ListItemText primary="Discord Settings"/>
        </ListItem>
    </div>
);
