import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import { Connect } from 'react-redux';

import ValidatedLoginForm from "./ValidatedLoginForm";
import Main from "./Main";
import Home from "./Home";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authed: true,
            loggedIn: true
        };
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <Home authed={this.state.authed} />} />
                    <Route exact path="/main" render={(props) => <Main {...props} loggedIn={this.state.loggedIn} />} />
                    <Route exact path="/login" component={ValidatedLoginForm} />
                    <Route path="/:id" render = {()=> (<p>404 - Page Not Found</p>)}/>
                </Switch>
            </div>
        );
    }
}

export default App;

