import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './App.css';
import { Connect } from 'react-redux';

import ValidatedLoginForm from "./ValidatedLoginForm";
import Main from "./Main";
import Home from "./Home";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            authed: false,
            loggedIn: false
        };
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Home authed={this.state.authed} />} />
                    <Route exact path="/main" render={() => <Main loggedIn={this.state.loggedIn} />} />
                    <Route exact path="/login" component={ValidatedLoginForm} />
                    <Route path="/:id" render = {()=> (<p>404 - Page Not Found</p>)}/>
                </Switch>
            </div>
        );
    }
}

export default App;

