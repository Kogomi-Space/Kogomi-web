import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    console.log('props',props);
    function discord(err, res){
        if (!err){
            console.log(res)
        }else{
            console.log("fuk")
        }
    }
    const fetchOAuth = async signal => {
        const url = new URL('https://discordapp.com/api/oauth2/authorize?client_id=438239507565903872&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fmain&response_type=code&scope=identify');
        const res = await fetch(url, { signal });
        const { value } = await res.json();
        console.log(res)
    }
    return(
        <div>
            <h2>Home</h2>
            <ul>
                {props.authed ? (
                    <li><Link to={process.env.PUBLIC_URL + `/main`}>Login</Link></li>
                ) : (
                    <li><Link to={process.env.PUBLIC_URL + `/login`}>Login</Link></li>
                )}
                {/*<li><Link onClick={fetchOAuth}>Login with Discord</Link></li>*/}
            </ul>
        </div>
    )
}

export default Home;
