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
    </main>
    )
  }
}
export default Home;
