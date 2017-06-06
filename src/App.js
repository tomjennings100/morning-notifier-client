import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Provider, inject, observer } from 'mobx-react';
import Login from './scenes/Login';
import User from './stores/User';
import SignupStore from './stores/Signup'
import PrivateRoute from './components/private-route';
import Logout from './components/logout';
import authget from './data/auth-get';
import Signup from './scenes/Signup';
import DevTools from 'mobx-react-devtools';
import Feeds from './scenes/Feeds';
import FeedStore from './stores/Feeds'; 

window.Feedstore = FeedStore

const Home = inject('User')(observer(({ User }) =>
  <div>
    <h2>Hello, {User.name}</h2>
  </div>
))

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

const Stores = { User, Signup: SignupStore, Feeds: FeedStore }

const App = () => (
  <Provider {...Stores}>
    <Router>
      <div>
        <DevTools />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
          <li><Link to="/feeds">Feeds</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>

        <hr />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/about" component={About} />
        <PrivateRoute path="/feeds" component={Feeds} />
        <Route path="/topics" component={Topics} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  </Provider>
)
export default App; 