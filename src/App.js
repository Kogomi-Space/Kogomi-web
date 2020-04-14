import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import { Connect } from 'react-redux';

import ValidatedLoginForm from "./ValidatedLoginForm";
import Main from "./Main/Main";
import Home from "./Home";
import Test from "./Main/Test";
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
                    {/*    <Route exact path="discordsettings" >*/}
                    {/*        <Route exact path="osu" component={Test}/>*/}
                    {/*    </Route>*/}
                    {/*</Route>*/}
                    <Route exact path="/login" component={ValidatedLoginForm} />
                    <NotFound />
                </Switch>
            </div>
        );
    }
}

export default App;

