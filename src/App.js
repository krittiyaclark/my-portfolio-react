import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Contact from './components/Pages/Contact';


// includes (css)
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className='main-bg'>
          <Router>
            <div>
              <Header>

                <Route exact path='/' component={Home} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Portfolio' component={Portfolio} />
                <Route exact path='/Contact' component={Contact} />

              </Header>
              <Footer />
            </div>
          </Router>
        </div>
      </div>

    )
  }
}

export default App;
