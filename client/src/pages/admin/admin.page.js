import React, { useEffect } from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import { RiArticleLine, ImUsers } from 'react-icons/all';
import { connect } from 'react-redux';
import './admin.scss';

function AdminPage(props) {
    const { url } = useRouteMatch();

    const adminRoutes = [
        {
            path: '/admin/article',
            Component: React.lazy(() => import('./article/article.page')),
        },
        {
            path: '/admin/article_writer',
            Component: React.lazy(() =>
                import('./article_writer/article_writer.page')
            ),
        },
        // {
        //     path: '/admin/user',
        //     Component: React.lazy(() => import('./user/user.page')),
        // },
    ];
    const articleEdit = {
        path: '/admin/:article',
        Component: React.lazy(() => import('./article_edit/article_edit.page')),
    };
    const component = adminRoutes.find((ele) => ele.path === url);

    return (
        <div className="admin">
            <section className="admin__menu">
                <Link to={'/admin/article'} className="admin__menu--item">
                    <div className="info">
                        <p>total article</p>
                    </div>
                    <RiArticleLine />
                </Link>
                {/* <Link to={'/admin/user'} className="admin__menu--item">
                    <div className="info">
                        <p>total user</p>
                    </div>
                    <ImUsers />
                </Link> */}
            </section>
            <section className="admin__content">
                {component ? (
                    <Route
                        to={component.path}
                        component={component.Component}
                        exact
                    />
                ) : (
                    <Route
                        to={articleEdit.path}
                        component={articleEdit.Component}
                        exact
                    />
                )}
            </section>
        </div>
    );
}

export default AdminPage;
