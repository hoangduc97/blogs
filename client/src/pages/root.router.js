import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/header/header.component';
import Home from './home/home.page';
import SignIn from './signin/signin.page';
import SignUp from './signup/signup.page';

const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
