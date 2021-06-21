import './App.css';
import Display from './components/Display'
import Navbar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <div>
        <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/blogs/:id'>
          <Display />
        </Route>
        </Switch>
      </div>  
     </div>
    </Router>
    
  );
}

export default App;
