import './stylesheets/App.css'
import './stylesheets/TopNav.css'
import './stylesheets/SideNav.css'
import './stylesheets/Responsive.css'
import './stylesheets/NavSelectGrids.css'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TopNav from './components/layout/TopNav'
import SideNav from './components/layout/SideNav'

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <SideNav />
      </div>
    </Router>
  );
}

export default App;
