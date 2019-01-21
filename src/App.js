import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import Contact from './components/Pages/Contact';
import Resume from './components/Pages/Resume';


// includes (css)
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className='wrapper'>
          <Router>
            <div>
              <Header />

                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Projects' component={Projects} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Resume' component={Resume} />

            </div>
          </Router>
        </div>
    )
  }
}

export default App;
