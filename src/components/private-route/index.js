import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

const PrivateRoute = inject('User')(observer(({ component: Component, User,   ...rest }) => {
    

    return (
        <Route {...rest} render={props => (
            User.isLoggedIn ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location }
                    }} />
                )
        )} />
    )
}))

export default withRouter(PrivateRoute); 