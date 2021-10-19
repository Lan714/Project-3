import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import History from './Pages/History'
import Leaderboard from './Pages/Leaderboard';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/signIn'>
            <Auth />
          </Route>
          <Route path='/history'>
            <History />
          </Route>
          <Route path='/leaderboard'>
            <Leaderboard />
          </Route>
          <Route path='/aboutus'>
            <AboutUs />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
