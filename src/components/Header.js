import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className='container-fluid'>
        <div className='logo float-left'>
          <Link to='/'><i className="fas fa-terminal"></i></Link>
        </div>

        <nav className='float-right'>
          <ul>
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
        </nav>
      </header>
    )
  }
}
export default Header;
