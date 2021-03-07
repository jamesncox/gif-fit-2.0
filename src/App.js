import './stylesheets/App.css'
import './stylesheets/TopNav.css'
import './stylesheets/SideNav.css'
import './stylesheets/Responsive.css'
import './stylesheets/NavSelectGrids.css'
import './stylesheets/Modal.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TopNav from './components/layout/TopNav'
import SideNav from './components/layout/SideNav'
import Home from './components/layout/Home'
import Workout from './components/layout/Workout'

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <SideNav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/workout">
            <Workout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
