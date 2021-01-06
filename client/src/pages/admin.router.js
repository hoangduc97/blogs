import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { refreshToken } from '../store/auth/auth.action';

function AdminRouter(props) {
    const { user, refreshToken } = props;

    useEffect(() => {
        if (typeof user === 'undefined') refreshToken();
    }, [refreshToken]);

    if (!user || user.role == process.env.ROLE_USER) {
        return <Redirect to={'/'} />;
    }
    return <Route {...props} />;
}

const mapStateToProps = ({ AuthReducer }) => ({
    user: AuthReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    refreshToken: () => dispatch(refreshToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminRouter);
