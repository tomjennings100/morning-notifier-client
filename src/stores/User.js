import { get, post } from 'axios';
import { observable, computed, action } from 'mobx';

class User {
    constructor() {
        const user = localStorage.getItem('user');
        if (user) {
            const { token, name, email } = JSON.parse(user);
            this.token = token;
            this.name = name;
            this.email = email;
        }
    }
    @observable token = '';
    @observable loginError = '';
    @observable name = '';
    @observable email = '';

    @computed
    get isLoggedIn() {
        return !!this.token;
    }

    @action async login(email, password) {
        try {
            const res = await post('/user/login', { email, password });
            this.token = res.data.token;
            this.name = res.data.name;
            localStorage.setItem('user', JSON.stringify(res.data))
            return res.data;
        }
        catch (e) {
            this.loginError = e;
        }
    }

    @action logout() {
        post('/user/logout', {token:this.token});
        this.token = ''
        this.name = ''
        this.email = '';
        localStorage.removeItem('user');
    }
}
const user = new User()
window.user = user
export default user; 