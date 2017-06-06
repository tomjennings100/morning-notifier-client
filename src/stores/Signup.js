import { post } from 'axios';
import { observable, action } from 'mobx';
import Validator from 'validatorjs';

class Signup {
    @observable
    form = {
        fields: {
            name: {
                value: '',
                error: null,
                rule: 'required'
            },
            email: {
                value: '',
                error: null,
                rule: 'required|email'
            },
            password: {
                value: '',
                error: null,
                rule: 'required'
            },
            confirmPassword: {
                value: '',
                error: null,
                rule: 'required'
            }
        },
        meta: {
            isValid: true,
            error: null
        }
    }

    @action
    onChange(e) {
        const field = e.target.name; 
        const value = e.target.value; 
        console.log(field, value); 
        
        this.form.fields[field].value = value;
        const { name, email, password } = this.form.fields;
        const validation = new Validator(
            { name: name.value, email: email.value, password: password.value },
            { name: name.rule, email: email.rule, password: password.rule }
        )
        this.form.meta.isValid = validation.passes();
        this.form.fields[field].error = validation.errors.first(field);
    }

    @action
    onSubmit = (e) => {
        const {name, email, password} = this.form; 
        e.preventDefault();
        post('/user/signup', {
            name: name.value, 
            email: email.value, 
            password: password.value
        })
    }
}

export default new Signup(); 