import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
        <div className='wrapper'>
      <header className='about container-fluid text-center filter'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-8 align-self-center'>
                  <h1>My Passion and personality</h1>
               </div>
            </div>
         </div>
      </header>

      <section className='container-fluid text-center'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-8 align-self-center'>
                  <h1>My Passion and personality</h1>
                  <p>                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
         </div>
      </section>
      </div>
    )
  }
}
export default About;
