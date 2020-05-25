import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import ToolBar from "./ToolBar";
import DrawerProp from "./DrawerProp";
import Dashboard from "./Dashboard";
import Test from "./Test";
import Test2 from "./Test2";
import Osu from "./Osu";
import LoL from "./LoL";
import {makeStyles, useTheme} from "@material-ui/core/styles";

const Main = () => {
    const theme = useTheme();
    const drawerWidth = 240;
    const classes = makeStyles(() => ({
        root: {
            display: 'flex',
        },
        appBar: {
            position: 'relative',
            zIndex: 10,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            zIndex: -10,
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
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="relative" className={classes.appBar}>
                <ToolBar/>
            </AppBar>
            <DrawerProp classes={classes} />
            <main className={classes.content}>
                <AnimatedSwitch
                    atEnter={{ opacity:0, scale:1.2 }}
                    atLeave={{ opacity: bounce(0), scale: bounce(0.8)}}
                    atActive={{ opacity: bounce(1), scale: bounce(1) }}
                    mapStyles={mapStyles}
                    runOnMount
                    className="route-wrapper"
                >
                    <div style={{
                        paddingLeft: '250px'
                    }} >
                        <Route exact path={process.env.PUBLIC_URL + "/main"} component={Dashboard} />
                        <Route exact path={process.env.PUBLIC_URL + "/usersettings/sample1"} component={Test} />
                        <Route exact path={process.env.PUBLIC_URL + "/usersettings/sample2"} component={Test2} />
                        <Route exact path={process.env.PUBLIC_URL + "/discordsettings/osu"} component={Osu} />
                        <Route exact path={process.env.PUBLIC_URL + "/discordsettings/LoL"} component={LoL} />
                    </div>
                </AnimatedSwitch>
            </main>
        </div>
    );
}
export default Main;
