import { observable, action, computed, extendObservable } from 'mobx';
import authGet from '../data/auth-get';

class Feed {
    constructor(feed){
        const {id, name, url, interval} = feed;
        extendObservable(this, {
            id, 
            name, 
            url,
            interval
        }); 
    }
}

class FeedsStore {
    @observable feeds = [];
    refresh = async () => {
        try {
            const feedsRes = await authGet('/feed');
            console.log(feedsRes)
            feedsRes.data.forEach(feed => {
                this.addFeed(feed); 
            }); 
        }
        catch (e) {
            return new Error(`Error fetching feeds: ${e}`);
        }
    }

    @action
    addFeed = (feed, updateServer) => {
        this.feeds.push(new Feed(feed))
    }
}

export default new FeedsStore(); 