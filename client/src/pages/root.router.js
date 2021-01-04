import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loading from '../components/loading/loading.component';

const routes = [
    {
        path: '/article/:articleSlug',
        Component: React.lazy(() => import('./article/article.page')),
    },
    {
        path: '/category/:category_id',
        Component: React.lazy(() => import('./article/article.page')),
    },
    {
        path: '/tag/:tag_id',
        Component: React.lazy(() => import('./article/article.page')),
    },
    {
        path: '/resume',
        Component: React.lazy(() => import('./resume/resume.page')),
    },
    {
        path: '/login',
        Component: React.lazy(() => import('./auth/login.page')),
    },
    {
        path: '/register',
        Component: React.lazy(() => import('./auth/register.page')),
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

const Router = () => {
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
                                    <Component {...match} />
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
