import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='container-fluid'>
        <div className='logo float-left'>
          <Link to='/'><img src='#' />LOGO</Link>
        </div>

        <nav className='float-right'>
          <ul>
            <li>
              <Link to='/About'>about</Link>
            </li>
            <li>
              <Link to='/Projects'>projects</Link>
            </li>
            <li>
              <Link to='/Contact'>contact</Link>
            </li>
            <li>
              <Link to='/Resume'>resume</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header;
