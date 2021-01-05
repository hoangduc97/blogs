import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { refreshToken } from '../store/auth/auth.action';

function AuthRouter(props) {
    const { user, refreshToken } = props;
    if (user) {
        return <Redirect to={'/'} />;
    }

    useEffect(() => {
        if (!user) refreshToken();
    }, [refreshToken]);
    return <Route {...props} />;
}

const mapStateToProps = ({ AuthReducer }) => ({
    user: AuthReducer.user,
});

const mapDispatchToProps = (dispatch) => ({
    refreshToken: () => dispatch(refreshToken()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthRouter);
