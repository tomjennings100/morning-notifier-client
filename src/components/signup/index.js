import React from 'react'
import FormInput from '../form-input';
import { withRouter } from 'react-router';

const SignupForm = ({ onChange, onSubmit, form }) => {
    return (
        <form onSubmit={onSubmit} onChange={onChange}>
            <FormInput
                name="name"
                type='text'
                placeholder='name'
                value={form.fields.name.value}
                error={form.fields.name.error}
            />
            <FormInput
                name="email"
                type='email'
                placeholder='email'
                value={form.fields.email.value}
                error={form.fields.email.error}
            />
            <FormInput
                name="password"
                type='password'
                placeholder='password'
                value={form.fields.password.value}
                error={form.fields.password.error}
            />
            <FormInput
                name="confirmPassword"
                type="password"
                placeholder='confirm password' />
            <input
                type="submit"
                value="continue"
                disabled={!form.meta.isValid} />
        </form>
    )
}

export default withRouter(SignupForm);