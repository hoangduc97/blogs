import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loading from '../components/loading/loading.component';

const TIMEOUT = 2000;

const fakeDelay = (ms) => (promise) =>
    promise.then(
        (data) =>
            new Promise((resolve) => {
                setTimeout(() => resolve(data), ms);
            })
    );

const routes = [
    {
        path: '/article',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
    },
    {
        path: '/book',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
    },
    {
        path: '/tutorial',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
    },
    {
        path: '/project',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
    },
    {
        path: '/resume',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./resume/resume.page'))
        ),
    },
    {
        path: '/signin',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./sign/signin/signin.page'))
        ),
    },
    {
        path: '/signup',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./sign/signup/signup.page'))
        ),
    },
    {
        path: '/',
        Component: React.lazy(() =>
            fakeDelay(TIMEOUT)(import('./home/home.page'))
        ),
    },
];

const Router = (props) => {
    return (
        <Suspense fallback={<Loading />}>
            <TransitionGroup>
                <Switch>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} exact path={path}>
                            {({ match }) => (
                                <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="fade"
                                    appear
                                >
                                    <Component />
                                </CSSTransition>
                            )}
                        </Route>
                    ))}
                </Switch>
            </TransitionGroup>
        </Suspense>
    );
};

export default Router;
