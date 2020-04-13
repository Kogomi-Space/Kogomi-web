import React from 'react';
import { Link, Route } from 'react-router-dom';

const Main = (props) => {
    console.log('props',props);
    const match = props.match;
    return(
        props.loggedIn ? (
            <div> <ul>
                <li><Link to={`${match.url}`}>Dashboard</Link></li>
                <li><Link to={`${match.url}/usersettings`}>User Settings</Link></li>
                <li><Link to={`${match.url}/discsettings`}>Discord Settings</Link></li>
            </ul>
                <Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
            </div>
        ) : (
            <div>
                <h2>You must log in first before trying to access this page!</h2>
            </div>
        ))
}
export default Main;
