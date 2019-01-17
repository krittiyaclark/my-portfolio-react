import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='masthead container-fluid'>
        <nav className='fixed-top navbar'>
          <div className="container text-center">
              <Link to='/' className='logo'><i className="fas fa-terminal"></i></Link>
              
                <ul className='ml-auto'>
                  <li>
                    <Link to='/'>home</Link>
                    </li>
                  <li>
                    <Link to='/About'>about</Link>
                    </li>
                  <li>
                    <Link to='/Portfolio'>portfolio</Link>
                    </li>
                  <li>
                    <Link to='/Contact'>contact</Link>
                    </li>
                </ul>
          </div>
        </nav>

        <div className="container-fluid text-center">
          <div className="my-auto container">
            <div className="row">
              <div className="col-sm">
                <div className="banner-text">
                  <h1>Hello, I'm Krittiya!</h1>
                  <p>Front-End Web Developer</p>

                  <hr/>

                  <p>HTM5L/CSS3 | Bootstrap | SASS | JavaScript | React | React Native</p>

                    <div className="social-links">

                      {/* LinkedIn */}
                      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-linkedin" aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-github-alt" aria-hidden="true" />
                      </a>

                      {/* Freecodecamp */}
                      <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fab fa-free-code-camp" aria-hidden="true" />
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </header>
    )
  }
}
export default Header;
