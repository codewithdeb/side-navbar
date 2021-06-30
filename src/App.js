import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HiMenuAlt4 } from 'react-icons/hi'
import Home from './pages/home';
import About from './pages/about';

function App() {

  const [ showNav, setShowNav ] = useState(false)

  return (
    <Router>
        <div className="App">
          <header>
            <HiMenuAlt4 onClick={() => setShowNav(!showNav)} />
          </header>

          <Navbar show={showNav} />

          <div className='main'>
            <Route path="/" exact={true} component ={Home}/>
            <Route path="/about" exact={true} component ={About}/>            

          </div>
        </div>
    </Router>
  );
}

export default App;
