import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Button} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from 'react-router-dom';
import React from "react";
import logOut from "./LogOut";

const ToolBar = () => {
    let history = useHistory();
    const handleLogout = async() => {
        const isLogout = await logOut();
        if (isLogout){
            localStorage.setItem('token',null);
            history.push(process.env.PUBLIC_URL + "/login")
        }else{
            alert("Logout unsuccessful");
        }
    }
    return(
        <Toolbar>
            <Grid justify='space-between' container spacing={10} >
                <Grid item >
                    <Typography variant="h6" noWrap>
                        Kogomi
                    </Typography>
                </Grid>
                <Grid item >
                    <div style={{float: 'right'}}>
                        <Button variant="contained" onClick={handleLogout}>Log Out</Button>
                    </div>
                </Grid>
            </Grid>
        </Toolbar>
    );
}

export default ToolBar;
