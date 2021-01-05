import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRouter(props) {
    const { user } = props;

    if (!user) {
        <Redirect to={'/login'} />;
    }
    return <Route {...props} />;
}

const mapStateToProps = ({ AuthReducer }) => ({
    user: AuthReducer.user,
});
export default connect(mapStateToProps)(PrivateRouter);
