import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Auth from './Pages/Auth'
import Home from './Pages/Home'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
          <Home />
            <Header />
          </Route>
          <Route path='/signIn'>
            <Auth />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
