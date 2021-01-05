import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/auth/auth.action';
import Loading from '../../components/loading/loading.component';

function Logout(props) {
    const history = useHistory();

    useEffect(() => {
        props.logout((url) => {
            history.push(url);
        });
    }, [logout]);
    return <Loading />;
}

const mapDispatchToProps = (dispatch) => ({
    logout: (cb) => dispatch(logout(cb)),
});

export default connect(null, mapDispatchToProps)(Logout);
