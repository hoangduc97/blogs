import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loading from '../components/loading/loading.component';

const routes = [
    {
        path: '/article',
        Component: React.lazy(() => import('./article/article.page')),
    },
    {
        path: '/resume',
        Component: React.lazy(() => import('./resume/resume.page')),
    },
    {
        path: '/login',
        Component: React.lazy(() => import('./resume/resume.page')),
    },
    {
        path: '/register',
        Component: React.lazy(() => import('./resume/resume.page')),
    },
    {
        path: '/',
        Component: React.lazy(() => import('./home/home.page')),
    },
    {
        path: '*',
        Component: React.lazy(() => import('./notfound/notfound.page')),
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
