import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <main id='main' className="container-fluid text-center filter">
        <div className="full-screen">
          <div className="row">
            <div className="col-sm">
              <div className="banner-text">
                <h1>Hello, I'm Krittiya!</h1>
                <p>Front-End Web Developer</p>

                <hr/>

                <p>HTML5/CSS3 | Bootstrap | SASS | JavaScript | React | React Native</p>

                  <div className="social-links">

                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>

                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className="fab fa-github-alt" aria-hidden="true" />
                    </a>

                    <a href='mailto:solution.stack99@gmail.com'>
                      <i className='fas fa-envelope'></i>
                    </a>
                    
                    <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                      <i className='fab fa-skype'></i>
                    </a>

                  </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    )
  }
}
export default Home;
