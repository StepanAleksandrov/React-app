import React from 'react';
import {Route, Redirect} from 'react-router';

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => 
                localStorage.getItem('username') && localStorage.getItem('password')
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

export default PrivateRoute;