import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
// import { Connect } from 'react-redux';

import ValidatedLoginForm from "./ValidatedLoginForm";
import Main from "./Main/Main";
import Home from "./Home";
import NotFound from "./Pages/NotFound";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: false,
            loggedIn: true
        };
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Home authed={this.state.authed} />} />
                    <Route exact path="/main" component={Main} />
                    <Route path="/usersettings" component={Main} />
                    <Route path="/discordsettings" component={Main} />
                    <Route exact path="/login" component={ValidatedLoginForm} />
                    <Route exact path="/NotFound" component={NotFound} />
                    <Redirect to="/NotFound" />
                </Switch>
            </div>
        );
    }
}

export default App;

