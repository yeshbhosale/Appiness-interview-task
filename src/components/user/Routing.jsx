import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Routing = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('UserInfo')
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
);

export default Routing;