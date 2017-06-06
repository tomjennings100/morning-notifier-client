import React from 'react';
import { observer, inject } from 'mobx-react';
import { Redirect } from 'react-router';

@inject('User')
@observer
class Logout extends React.Component {

    componentWillMount() {
        this.props.User.logout();
    }

    render() {
        return <Redirect to="/login" />
    }
}

export default Logout;

