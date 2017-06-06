import React from 'react'; 

const Login = (props)=>{
    const {onChange, onSubmit} = props; 
    return (
        <form onChange={onChange} onSubmit={onSubmit}> 
            <input type="email" placeholder="email" name="email"/>
            <input type="password" placeholder="password" name="password"/>
            <button>Submit</button>
        </form> 
    )
}

export default Login; 