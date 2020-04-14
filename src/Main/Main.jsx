import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';

const styles = {
    list: {
        width: 250,
    },
    links: {
        textDecoration:'none',
    },
    menuHeader: {
        paddingLeft: '30px'
    }
};

class Main extends Component {

    console.log('props',props);
    const match = props.match;
    return(
        props.loggedIn ? (

        ) : (
            <div>
                <h2>You must log in first before trying to access this page!</h2>
            </div>
        ))
}
export default Main;
