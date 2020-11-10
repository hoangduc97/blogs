import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home/home.page';
import Resume from './resume/resume.page';
import SignIn from './signin/signin.page';
import SignUp from './signup/signup.page';

const Router = (props) => {
    return (
        <Switch>
            <Route path="/article" component={SignIn} />
            <Route path="/book" component={SignIn} />
            <Route path="/tutorial" component={SignIn} />
            <Route path="/project" component={SignIn} />
            <Route path="/resume" component={Resume} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
        </Switch>
    );
};

export default Router;
