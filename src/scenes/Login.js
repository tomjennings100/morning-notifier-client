import React, { Component } from 'react';
import LoginForm from '../components/login';
import { inject, observer } from 'mobx-react';
import { Redirect, Link } from 'react-router-dom';

@inject('User')
@observer
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        const user = this.state.user;
        const name = e.target.name;
        user[name] = e.target.value;
        this.setState({
            user
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state.user;
        const { User } = this.props;
        User.login(email, password)
    }

    render() {
        if (this.props.User.isLoggedIn) {
            return <Redirect to='/' />
        }
        else {
            return (
                <div>
                    <Link to='/signup'>Sign up</Link>
                    <LoginForm onChange={this.onChange} onSubmit={this.onSubmit} />
                </div>
            )
        }
    }
}

export default Login; 