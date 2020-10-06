import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/home.page';
import SignIn from './signin/signin.page';
import SignUp from './signup/signup.page';

const Router = (props) => {
    console.log(props)
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/register" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
