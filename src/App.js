import React, { Component } from 'react';
import {
  BrowserRouter,
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
          <BrowserRouter>
            <>
              <Header />

                <Route exact path='/' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/Projects' component={Projects} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Resume' component={Resume} />

            </>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
