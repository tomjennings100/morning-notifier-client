import { get } from 'axios';
import User from '../stores/User';

console.log(User.token)
const headers = {
    'Authorization': `JWT ${User.token}`,
    'Content-Type': 'application/x-www-form-urlencoded'
}

const authGet = (url) => {
    return get(url, { headers })
}

export default authGet; 