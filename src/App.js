import './stylesheets/App.css'
import './stylesheets/TopNav.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import TopNav from './components/layout/TopNav'

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav />
        <h1>GIF FIT</h1>
      </div>
    </Router>
  );
}

export default App;
