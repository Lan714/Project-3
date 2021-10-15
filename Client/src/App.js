import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// import Auth from './pages/Auth'
// import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            {/* <Home /> */}
          </Route>
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
