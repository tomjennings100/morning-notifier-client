import React, { Component } from 'react';
import SignupForm from '../components/signup';
import { inject, observer } from 'mobx-react';
import {withRouter} from 'react-router'; 

@inject('Signup')
@observer
class Signup extends Component {
    render() {
        const { onChange, onSubmit, form } = this.props.Signup;
        return (
            <SignupForm onChange={onChange} onSubmit={onSubmit} form={form} />
        )
    }
}

export default Signup; 