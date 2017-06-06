import React from 'react'
import { withRouter } from 'react-router';

const FormInput = ({ placeholder, type, name, onChange, error, match, location, history, staticContext, ...rest }) => {
    console.log(error);
    return (
        <span>
            <input
                placeholder={placeholder || ''}
                type={type || 'text'}
                name={name || ''}
                onChange={onChange}
            />
            {error ? <div>{error}</div> : null}
        </span>
    )
}

export default withRouter(FormInput); 