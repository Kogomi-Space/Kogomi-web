import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    console.log('props',props.authed);
    return(
        <div>
            <h2>Home</h2>
            <ul>
                {props.authed ? (
                    <li><Link to={`/main`}>Login</Link></li>
                ) : (
                    <li><Link to={`/login`}>Login</Link></li>
                )}
            </ul>
        </div>
    )
}

export default Home;
