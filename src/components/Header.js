import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-expand-sm navbar-default navbar-fixed-top navbar-dark bg-dark'>
          <Link to='/' className='navbar-brand'><img src='#' />LOGO</Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarText'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item'>
                  <Link to='/About' className='nav-link'>about</Link>
                </li>
                <li>
                  <Link to='/Projects' className='nav-link'>projects</Link>
                </li>
                <li>
                  <Link to='/Contact' className='nav-link'>contact</Link>
                </li>
                <li>
                  <Link to='/Resume' className='nav-link'>resume</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
    )
  }
}
export default Header;
